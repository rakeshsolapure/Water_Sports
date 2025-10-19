import React, { useState } from 'react';
import { getWhatsAppMessage, getQuickWhatsAppMessage } from '../utils/whatsappMessage';

const WhatsAppTester = () => {
  const [testResults, setTestResults] = useState(null);

  const testWhatsAppLinks = () => {
    const fullMessage = getWhatsAppMessage();
    const scubaMessage = getQuickWhatsAppMessage('scuba');
    const cruiseMessage = getQuickWhatsAppMessage('cruise');
    const jetskiMessage = getQuickWhatsAppMessage('jetski');

    const results = {
      fullMessage: {
        url: fullMessage.whatsappUrl,
        urlLength: fullMessage.whatsappUrl.length,
        isValid: fullMessage.whatsappUrl.startsWith('https://wa.me/') && fullMessage.whatsappUrl.includes('919209768924')
      },
      scubaMessage: {
        url: scubaMessage.whatsappUrl,
        urlLength: scubaMessage.whatsappUrl.length,
        isValid: scubaMessage.whatsappUrl.startsWith('https://wa.me/') && scubaMessage.whatsappUrl.includes('919209768924')
      },
      cruiseMessage: {
        url: cruiseMessage.whatsappUrl,
        urlLength: cruiseMessage.whatsappUrl.length,
        isValid: cruiseMessage.whatsappUrl.startsWith('https://wa.me/') && cruiseMessage.whatsappUrl.includes('919209768924')
      },
      jetskiMessage: {
        url: jetskiMessage.whatsappUrl,
        urlLength: jetskiMessage.whatsappUrl.length,
        isValid: jetskiMessage.whatsappUrl.startsWith('https://wa.me/') && jetskiMessage.whatsappUrl.includes('919209768924')
      }
    };

    setTestResults(results);
  };

  const openWhatsApp = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>WhatsApp Link Tester</h2>
      
      <button 
        onClick={testWhatsAppLinks}
        style={{
          padding: '10px 20px',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Test WhatsApp Links
      </button>

      {testResults && (
        <div>
          <h3>Test Results:</h3>
          
          <div style={{ marginBottom: '20px' }}>
            <h4>Full Welcome Message</h4>
            <p>✅ Valid: {testResults.fullMessage.isValid ? 'Yes' : 'No'}</p>
            <p>📏 URL Length: {testResults.fullMessage.urlLength}</p>
            <p>🔗 URL: <code>{testResults.fullMessage.url}</code></p>
            <button 
              onClick={() => openWhatsApp(testResults.fullMessage.url)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Test Full Message
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>Scuba Diving Message</h4>
            <p>✅ Valid: {testResults.scubaMessage.isValid ? 'Yes' : 'No'}</p>
            <p>📏 URL Length: {testResults.scubaMessage.urlLength}</p>
            <p>🔗 URL: <code>{testResults.scubaMessage.url}</code></p>
            <button 
              onClick={() => openWhatsApp(testResults.scubaMessage.url)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Test Scuba Message
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>Cruise Message</h4>
            <p>✅ Valid: {testResults.cruiseMessage.isValid ? 'Yes' : 'No'}</p>
            <p>📏 URL Length: {testResults.cruiseMessage.urlLength}</p>
            <p>🔗 URL: <code>{testResults.cruiseMessage.url}</code></p>
            <button 
              onClick={() => openWhatsApp(testResults.cruiseMessage.url)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Test Cruise Message
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>Jet Ski Message</h4>
            <p>✅ Valid: {testResults.jetskiMessage.isValid ? 'Yes' : 'No'}</p>
            <p>📏 URL Length: {testResults.jetskiMessage.urlLength}</p>
            <p>🔗 URL: <code>{testResults.jetskiMessage.url}</code></p>
            <button 
              onClick={() => openWhatsApp(testResults.jetskiMessage.url)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Test Jet Ski Message
            </button>
          </div>

          <div style={{ 
            backgroundColor: '#f0f8ff', 
            padding: '15px', 
            borderRadius: '5px',
            border: '1px solid #007bff'
          }}>
            <h4>📱 Troubleshooting Tips:</h4>
            <ul>
              <li>Make sure you have WhatsApp installed on your device</li>
              <li>Try clicking the test buttons above to see if WhatsApp opens</li>
              <li>If WhatsApp doesn't open, try copying the URL and pasting it in your browser</li>
              <li>The phone number should be: 919209768924 (without + sign)</li>
              <li>URLs should start with: https://wa.me/</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppTester;
