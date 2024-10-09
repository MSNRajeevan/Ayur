import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Rohini Ayurveda</h3>
          <p>Bringing ancient wisdom to modern wellness</p>
          <div className="social-links">
            <a href="https://www.facebook.com/people/Rohiniayurcom/100075990648571/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/rohiniayur/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCDky3ta9xvCT9-aIZGO3iQQ" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/booking">Book Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <address>
            <p>Rohini Ayurvedic Wellness Center</p>
            <p>1500 Scout Trace, Hoover, Alabama 35244, United States</p>
            <p>Phone: <a href="tel:205-920-1971">205-920-1971</a></p>
            <p>Email: <a href="mailto:drpbrohini@rohiniayur.com">drpbrohini@rohiniayur.com</a></p>
            <p>Email: <a href="mailto:roayur21@gmail.com">roayur21@gmail.com</a></p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Rohini Ayurvedic Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
