import React, { useState } from 'react';
import './Products.css';
import ayurherb from '../assets/ayurherb.jpeg';
import ayurskincare from '../assets/ayurskincare.JPG';
import triphala from '../assets/triphala.jpeg';
import imherb from '../assets/IMherb.jpg';


const products = [
  { id: 1, name: 'Ayur Herb', price: 10, category: 'Herbal Products', image: ayurherb },
  { id: 2, name: 'Ayur Skin Care', price: 15, category: 'Herbal Products', image: ayurskincare },
  { id: 3, name: 'Triphala powder/Tab/Cap', price: 12, category: 'Supplements', image: triphala },
  { id: 4, name: 'I M herb', price: 15, category: 'Supplements', image:  imherb},
];

function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="category-filter">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Herbal Products')}>Herbal Products</button>
        <button onClick={() => setSelectedCategory('Supplements')}>Supplements</button>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;