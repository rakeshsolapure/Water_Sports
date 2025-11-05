import React, { useState } from 'react';
import { getWhatsAppMessage, getQuickWhatsAppMessage } from '../utils/whatsappMessage';
import WhatsAppBookingGuide from './WhatsAppBookingGuide';

const EnhancedWhatsAppButton = ({ 
  children = "Book Now", 
  context = 'general',
  showGuide = true,
  className = "",
  style = {}
}) => {
  const [showBookingGuide, setShowBookingGuide] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    
    if (showGuide) {
      setShowBookingGuide(true);
    } else {
      // Direct WhatsApp opening without guide
      const { whatsappUrl } = context === 'general' 
        ? getWhatsAppMessage() 
        : getQuickWhatsAppMessage(context);
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
        style={{
          ...style,
          cursor: 'pointer'
        }}
      >
        {children}
      </button>

      {showBookingGuide && (
        <WhatsAppBookingGuide
          onClose={() => setShowBookingGuide(false)}
          context={context}
        />
      )}
    </>
  );
};

export default EnhancedWhatsAppButton;
