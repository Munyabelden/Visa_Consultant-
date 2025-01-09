import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Form from './Form';

const NavBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle for mobile menu

  return (
    <nav className="navigation">
      <div className="primary-details">
        <p>Get in touch with a consultant +27 72 066 3578</p>
        <ul className="trading-hours">
          <li>Trading Hours:</li>
          <li>Mon - Fri: 08:00 - 17:00</li>
          <li>Closed during weekends</li>
        </ul>
        <span className="email">
          <strong>info@visionaryvisaconsultation.co.za</strong>
        </span>
        <button className="contact-btn" onClick={() => setIsPopupOpen(true)}>Book an appointment</button>
      </div>

      <div className="primary-nav">
        <span className="logo">VC</span>
        <h1 className="primary-heading">Visionary Visa Consultant</h1>

        <div className={`mobile-menu-toggle ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>

        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsNavOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      <Popup trigger={isPopupOpen} setTrigger={setIsPopupOpen}>
        <Form />
      </Popup>
    </nav>
  );
};

export default NavBar;
