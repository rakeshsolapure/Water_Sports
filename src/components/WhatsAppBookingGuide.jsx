import React, { useState } from 'react';
import { getWhatsAppMessage } from '../utils/whatsappMessage';

const WhatsAppBookingGuide = ({ onClose, context = 'general' }) => {
  const { whatsappUrl, message } = getWhatsAppMessage();
  const [showInstructions, setShowInstructions] = useState(true);

  const handleWhatsAppClick = () => {
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
    
    // Show instructions after a delay
    setTimeout(() => {
      setShowInstructions(false);
    }, 2000);
  };

  const handleCallClick = () => {
    window.open('tel:+91-9209768924', '_self');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Water Sports Booking Inquiry');
    const body = encodeURIComponent(`
Hi Goa Travel Mart Team,

I'm interested in booking water sports activities. Please provide me with:

1. Available packages and pricing
2. Latest offers and discounts  
3. Booking procedure
4. Contact information

Looking forward to hearing from you!

Best regards
    `);
    window.open(`mailto:goatravelm@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '30px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        {showInstructions ? (
          <div>
            <h2 style={{ 
              color: '#25D366', 
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              📱 WhatsApp Booking Guide
            </h2>
            
            <div style={{
              backgroundColor: '#f0f8ff',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
              border: '1px solid #007bff'
            }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>
                🚀 How to Complete Your Booking:
              </h3>
              <ol style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                <li><strong>Click "Open WhatsApp"</strong> below</li>
                <li><strong>WhatsApp will open</strong> with your message ready</li>
                <li><strong>Click the SEND button</strong> in WhatsApp</li>
                <li><strong>We'll respond immediately</strong> with booking details!</li>
              </ol>
            </div>

            <div style={{
              backgroundColor: '#fff3cd',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: '1px solid #ffeaa7'
            }}>
              <h4 style={{ color: '#856404', marginBottom: '10px' }}>
                💡 Pro Tip:
              </h4>
              <p style={{ margin: 0, color: '#856404' }}>
                The message is already written for you! Just click SEND in WhatsApp to confirm your booking inquiry.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={handleWhatsAppClick}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                📱 Open WhatsApp
              </button>
              
              <button
                onClick={handleCallClick}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                📞 Call Directly
              </button>
            </div>

            <div style={{ marginTop: '15px' }}>
              <button
                onClick={handleEmailClick}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                📧 Send Email Instead
              </button>
            </div>

            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px'
            }}>
              ✅
            </div>
            <h2 style={{ color: '#25D366', marginBottom: '15px' }}>
              WhatsApp Opened!
            </h2>
            <p style={{ marginBottom: '20px', color: '#666' }}>
              Your message is ready in WhatsApp. Just click the <strong>SEND</strong> button to complete your booking inquiry!
            </p>
            <button
              onClick={onClose}
              style={{
                padding: '10px 20px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppBookingGuide;
