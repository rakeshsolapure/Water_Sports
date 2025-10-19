import React from 'react';
import EnhancedWhatsAppButton from './EnhancedWhatsAppButton';

const WhatsAppIntegrationGuide = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>📱 Enhanced WhatsApp Integration Guide</h2>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        border: '1px solid #dee2e6'
      }}>
        <h3>🎯 Problem Solved:</h3>
        <p>Users now get clear instructions on how to complete their WhatsApp booking, making the process more intuitive and increasing conversion rates.</p>
      </div>

      <h3>📋 How to Use the Enhanced WhatsApp Button:</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>1. Basic Usage (with booking guide):</h4>
        <pre style={{
          backgroundColor: '#f1f3f4',
          padding: '15px',
          borderRadius: '5px',
          overflow: 'auto'
        }}>{`import EnhancedWhatsAppButton from './components/EnhancedWhatsAppButton';

// Replace your existing Book Now buttons with:
<EnhancedWhatsAppButton 
  className="cta-button"
  context="general"
>
  Book Now
</EnhancedWhatsAppButton>`}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>2. Context-Specific Messages:</h4>
        <pre style={{
          backgroundColor: '#f1f3f4',
          padding: '15px',
          borderRadius: '5px',
          overflow: 'auto'
        }}>{`// For Scuba Diving section
<EnhancedWhatsAppButton 
  className="cta-button"
  context="scuba"
>
  Book Scuba Diving
</EnhancedWhatsAppButton>

// For Cruise section  
<EnhancedWhatsAppButton 
  className="cta-button"
  context="cruise"
>
  Book Cruise
</EnhancedWhatsAppButton>

// For Jet Ski section
<EnhancedWhatsAppButton 
  className="cta-button"
  context="jetski"
>
  Book Jet Ski
</EnhancedWhatsAppButton>`}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>3. Direct WhatsApp (without guide):</h4>
        <pre style={{
          backgroundColor: '#f1f3f4',
          padding: '15px',
          borderRadius: '5px',
          overflow: 'auto'
        }}>{`// For floating buttons or quick access
<EnhancedWhatsAppButton 
  className="whatsapp-float"
  context="general"
  showGuide={false}
>
  📱 WhatsApp
</EnhancedWhatsAppButton>`}</pre>
      </div>

      <div style={{
        backgroundColor: '#d4edda',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #c3e6cb'
      }}>
        <h4>✅ Benefits:</h4>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>Clear instructions for users</li>
          <li>Multiple contact options (WhatsApp, Call, Email)</li>
          <li>Context-specific messages</li>
          <li>Better user experience</li>
          <li>Higher conversion rates</li>
          <li>Professional appearance</li>
        </ul>
      </div>

      <div style={{
        backgroundColor: '#fff3cd',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #ffeaa7',
        marginTop: '20px'
      }}>
        <h4>⚠️ Important Note:</h4>
        <p>WhatsApp Web API doesn't allow automatic message sending for security reasons. Users must manually click "SEND" in WhatsApp. Our enhanced solution provides clear guidance to make this process seamless.</p>
      </div>
    </div>
  );
};

export default WhatsAppIntegrationGuide;
