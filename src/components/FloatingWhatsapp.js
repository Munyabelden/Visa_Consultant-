import React from 'react';
import './FloatingWhatsapp.css'; // Import your styles

const FloatingWhatsAppChat = () => {
  const whatsappNumber = '+27720663578'; // Your WhatsApp number

  const openWhatsApp = () => {
    const message = 'Hello! I would like to inquire more information.'; // Default message
    const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="floating-whatsapp" onClick={openWhatsApp}>
      <img src="/path/to/whatsapp-placeholder.png" alt="WhatsApp Icon" className="whatsapp-icon" />
    </div>
  );
};

export default FloatingWhatsAppChat;
