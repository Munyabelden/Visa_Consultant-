import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Form from './Form';

const NavBar = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="primary-details">
        <p>Get in touch with a consultant +27 78 976 6554</p>
        <ul className="trading-hours">
          <li>Trading Hours:</li>
          <li>Mon - Fri: 08:00 - 17:00</li>
          <li>Closed during weekends</li>
        </ul>
        <span className="email">
          <strong>info@visionaryvisaconsultant.co.za</strong>
        </span>
        <button className="contact-btn" onClick={ () => setIsPopupOpen(true)}>Book an appointment</button>
      </div>

      <div className="primary-nav">
        <span className="logo">VC</span>
        <h1 className="primary-heading">Visionary Visa Consultant</h1>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <Popup trigger={isPopupOpen} setTrigger={setIsPopupOpen}>
        <Form />
      </Popup>
    </nav>
  );
};

export default NavBar;
