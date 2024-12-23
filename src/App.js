import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingWhatsAppChat from './components/FloatingWhatsapp';
import PermResidance from './components/PermRes';

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
          <Route path="/permanent-residence" element={<PermResidance />} />
        </Routes>
        <FloatingWhatsAppChat />
      </div>
    </Router>
  );
}

export default App;
