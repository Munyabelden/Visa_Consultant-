import React from 'react';
import './styles/Popup.css';

const Popup = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Popup;
