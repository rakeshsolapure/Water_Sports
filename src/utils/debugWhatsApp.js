// Debug WhatsApp functionality
export const debugWhatsApp = () => {
  console.log('=== WhatsApp Debug Information ===');
  
  // Test different phone number formats
  const phoneNumbers = [
    '919209768924',
    '+919209768924',
    '91-920-976-8924',
    '+91-920-976-8924'
  ];
  
  console.log('Testing phone number formats:');
  phoneNumbers.forEach(phone => {
    const cleanPhone = phone.replace(/[^0-9+]/g, ''); // Remove non-numeric except +
    const url = `https://wa.me/${cleanPhone}`;
    console.log(`Original: ${phone} -> Clean: ${cleanPhone} -> URL: ${url}`);
  });
  
  // Test if we're on mobile or desktop
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log('Device type:', isMobile ? 'Mobile' : 'Desktop');
  
  // Test if WhatsApp is available
  const hasWhatsApp = navigator.userAgent.includes('WhatsApp') || 
                     (typeof window !== 'undefined' && window.location.protocol === 'whatsapp:');
  console.log('WhatsApp detected:', hasWhatsApp);
  
  // Test URL encoding
  const testMessage = 'Hello, I want to book a water sports package!';
  const encodedMessage = encodeURIComponent(testMessage);
  console.log('Test message encoding:');
  console.log('Original:', testMessage);
  console.log('Encoded:', encodedMessage);
  console.log('Decoded:', decodeURIComponent(encodedMessage));
  
  return {
    phoneNumbers,
    isMobile,
    hasWhatsApp,
    testMessage,
    encodedMessage
  };
};

// Function to create a simple WhatsApp URL for testing
export const createTestWhatsAppURL = () => {
  const phone = '919209768924';
  const message = 'Hello! I want to book a water sports package.';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  console.log('Test WhatsApp URL:', url);
  return url;
};

// Function to test WhatsApp link in current environment
export const testWhatsAppLink = () => {
  const url = createTestWhatsAppURL();
  
  // Try to open WhatsApp
  try {
    window.open(url, '_blank');
    console.log('✅ WhatsApp link opened successfully');
    return true;
  } catch (error) {
    console.error('❌ Error opening WhatsApp link:', error);
    return false;
  }
};
