import React from 'react';
import { getWhatsAppMessage, getQuickWhatsAppMessage } from '../utils/whatsappMessage';

const WhatsAppDemo = () => {
  const fullMessage = getWhatsAppMessage();
  const scubaMessage = getQuickWhatsAppMessage('scuba');
  const cruiseMessage = getQuickWhatsAppMessage('cruise');
  const jetskiMessage = getQuickWhatsAppMessage('jetski');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>WhatsApp Message Preview</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3>Full Welcome Message (General Book Now buttons)</h3>
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '15px', 
          borderRadius: '8px',
          whiteSpace: 'pre-line',
          fontSize: '14px',
          maxHeight: '300px',
          overflow: 'auto'
        }}>
          {fullMessage.message}
        </div>
        <p style={{ marginTop: '10px' }}>
          <strong>WhatsApp URL:</strong> <br/>
          <code style={{ fontSize: '12px', wordBreak: 'break-all' }}>
            {fullMessage.whatsappUrl}
          </code>
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Scuba Diving Specific Message</h3>
        <div style={{ 
          backgroundColor: '#e3f2fd', 
          padding: '15px', 
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          {scubaMessage.message}
        </div>
        <p style={{ marginTop: '10px' }}>
          <strong>WhatsApp URL:</strong> <br/>
          <code style={{ fontSize: '12px', wordBreak: 'break-all' }}>
            {scubaMessage.whatsappUrl}
          </code>
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Family Cruise Specific Message</h3>
        <div style={{ 
          backgroundColor: '#f3e5f5', 
          padding: '15px', 
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          {cruiseMessage.message}
        </div>
        <p style={{ marginTop: '10px' }}>
          <strong>WhatsApp URL:</strong> <br/>
          <code style={{ fontSize: '12px', wordBreak: 'break-all' }}>
            {cruiseMessage.whatsappUrl}
          </code>
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Jet Ski Specific Message</h3>
        <div style={{ 
          backgroundColor: '#e8f5e8', 
          padding: '15px', 
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          {jetskiMessage.message}
        </div>
        <p style={{ marginTop: '10px' }}>
          <strong>WhatsApp URL:</strong> <br/>
          <code style={{ fontSize: '12px', wordBreak: 'break-all' }}>
            {jetskiMessage.whatsappUrl}
          </code>
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <h4>How it works:</h4>
        <ul>
          <li>When users click "Book Now" buttons, WhatsApp will open with the pre-filled message</li>
          <li>Different buttons send context-specific messages based on the activity</li>
          <li>The full welcome message includes all business details and current offers</li>
          <li>Context-specific messages are shorter and focused on the particular activity</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
