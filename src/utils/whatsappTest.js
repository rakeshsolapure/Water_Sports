// Test WhatsApp URL generation and debugging
import { getWhatsAppMessage, getQuickWhatsAppMessage } from './whatsappMessage';

// Test function to debug WhatsApp URLs
export const testWhatsAppURLs = () => {
  console.log('=== WhatsApp URL Testing ===');
  
  // Test the full message
  const fullMessage = getWhatsAppMessage();
  console.log('Full Message URL Length:', fullMessage.whatsappUrl.length);
  console.log('Full Message URL:', fullMessage.whatsappUrl);
  
  // Test if URL is too long (WhatsApp has limits)
  if (fullMessage.whatsappUrl.length > 2000) {
    console.warn('⚠️ URL is too long! WhatsApp may not work properly.');
    console.log('URL Length:', fullMessage.whatsappUrl.length);
  }
  
  // Test quick messages
  const scubaMessage = getQuickWhatsAppMessage('scuba');
  console.log('Scuba Message URL:', scubaMessage.whatsappUrl);
  
  const cruiseMessage = getQuickWhatsAppMessage('cruise');
  console.log('Cruise Message URL:', cruiseMessage.whatsappUrl);
  
  // Test different phone number formats
  const phoneFormats = [
    '+919209768924',
    '919209768924', 
    '+91-920-976-8924',
    '919209768924'
  ];
  
  console.log('\n=== Testing Phone Number Formats ===');
  phoneFormats.forEach(format => {
    const testUrl = `https://wa.me/${format}`;
    console.log(`Format: ${format} -> URL: ${testUrl}`);
  });
  
  return {
    fullMessage,
    scubaMessage,
    cruiseMessage,
    phoneFormats
  };
};

// Function to create a simplified WhatsApp URL for testing
export const createSimpleWhatsAppURL = (phoneNumber = '+919209768924', message = '') => {
  const cleanPhone = phoneNumber.replace(/[^0-9+]/g, ''); // Remove all non-numeric characters except +
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const url = `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ''}`;
  
  console.log('Simple WhatsApp URL:', url);
  return url;
};

// Function to test if a URL is valid
export const isValidWhatsAppURL = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:' && 
           urlObj.hostname === 'wa.me' && 
           urlObj.pathname.length > 1;
  } catch (error) {
    return false;
  }
};
