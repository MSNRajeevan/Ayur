import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import AdminDashboard from './pages/AdminDashboard';
import Products from './pages/Products';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import emailjs from 'emailjs-com';
import SearchResults from './pages/SearchResults';
import PatientResources from './pages/PatientResources';

function App() {
  console.log('App component is rendering');
  
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsAdmin(currentUser.email === 'roayur21@gmail.com');
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const placeOrder = (items, total, name, email) => {
    const orderDetails = items.map(item => `${item.name} (Quantity: ${item.quantity})`).join('\n');
    const emailContent = `
      New order placed by:
      Name: ${name}
      Email: ${email}

      Order details:
      ${orderDetails}

      Total: $${total.toFixed(2)}
    `;

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        to_email: 'roayur21@gmail.com',
        from_name: name,
        from_email: email,
        message: emailContent,
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      alert('Your order has been placed successfully!');
      setCartItems([]); // Clear the cart after successful order
    }, (error) => {
      alert('Failed to place order. Please try again later.');
    });
  };

  const handleLogin = () => {
    setRedirectToHome(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRedirectToHome(true);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (redirectToHome) {
    setRedirectToHome(false);
    return <Navigate to="/" />;
  }

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} user={user} onLogout={handleLogout} isAdmin={isAdmin} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/:serviceType" element={<Booking />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route 
              path="/admin" 
              element={isAdmin ? <AdminDashboard /> : <Navigate to="/" replace />} 
            />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart 
              cartItems={cartItems} 
              updateCartItemQuantity={updateCartItemQuantity}
              removeFromCart={removeFromCart}
              placeOrder={placeOrder}
            />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} user={user} />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/resources" element={<PatientResources />} />
            <Route path="/insurance" element={<PatientResources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;