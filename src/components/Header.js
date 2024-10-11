import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import AyurLogoHeader from '../assets/AyurLogoHeader.PNG';

function Header({ cartItems, user, onLogout, isAdmin }) {
  console.log('Header component is rendering');
  
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={AyurLogoHeader} alt="Logo" />
          <Link to="/">AyuR</Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={showMobileMenu ? 'show-mobile' : ''}>
          <ul>
            <li><Link to="/" onClick={() => setShowMobileMenu(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setShowMobileMenu(false)}>Services</Link></li>
            <li><Link to="/products" onClick={() => setShowMobileMenu(false)}>Products</Link></li>
            <li><Link to="/blog" onClick={() => setShowMobileMenu(false)}>Blog</Link></li>
            <li><Link to="/about" onClick={() => setShowMobileMenu(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setShowMobileMenu(false)}>Contact</Link></li>
          </ul>
        </nav>
        <div className="header-icons">
          <Link to="/booking" className="button book-appointment-button">Book Your Appointment</Link>
          <div className="search-icon" onClick={toggleSearch}>
            <i className="fas fa-search"></i>
          </div>
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
          {user ? (
            <div className="user-menu">
              <i className="fas fa-user"></i>
              <div className="dropdown-content">
                {isAdmin && <Link to="/admin">Admin Dashboard</Link>}
                <Link to="/profile">Profile</Link>
                <button onClick={onLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="login-icon">
              <i className="fas fa-sign-in-alt"></i>
            </Link>
          )}
        </div>
      </div>
      {showSearch && (
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="button"><i className="fas fa-search"></i></button>
        </form>
      )}
    </header>
  );
}

export default Header;