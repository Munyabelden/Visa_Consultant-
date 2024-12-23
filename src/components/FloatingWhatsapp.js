import React from 'react';
import './styles/FloatingWhatsapp.css';
import ImageIcon from './images/whatsapp_2504957.png';

const FloatingWhatsAppChat = () => {
  const whatsappNumber = '+27720663578';

  const openWhatsApp = () => {
    const message = 'Hello! I would like to inquire more information.';
    const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="floating-whatsapp" onClick={openWhatsApp}>
      <img src={ImageIcon} alt="WhatsApp Icon" className="whatsapp-icon" />
    </div>
  );
};

export default FloatingWhatsAppChat;
