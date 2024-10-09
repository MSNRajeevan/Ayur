import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, updateCartItemQuantity, removeFromCart, placeOrder }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (item, newQuantity) => {
    updateCartItemQuantity(item.id, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '') {
      alert('Please enter your name and email before placing the order.');
      return;
    }
    placeOrder(cartItems, total, name, email);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="view-products-button">View Our Products</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)} className="remove-item">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <form onSubmit={handlePlaceOrder}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="place-order-button">Place Order</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;