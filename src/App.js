import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingWhatsAppChat from './components/FloatingWhatsapp';
import PermResidance from './components/PermRes';
import TempVisa from './components/tempRes';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/permanent-residence-visa" element={<PermResidance />} />
          <Route path="/temporay-visa" element={<TempVisa />} />
        </Routes>
        <FloatingWhatsAppChat />
      </div>
    </Router>
  );
}

export default App;
