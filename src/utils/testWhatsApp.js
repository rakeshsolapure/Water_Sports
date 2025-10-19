// Test file to verify WhatsApp message functionality
import { getWhatsAppMessage, getQuickWhatsAppMessage } from './whatsappMessage';

// Test the WhatsApp message generation
export const testWhatsAppMessages = () => {
  console.log('=== Testing WhatsApp Messages ===');
  
  // Test full welcome message
  const fullMessage = getWhatsAppMessage();
  console.log('Full Welcome Message URL:', fullMessage.whatsappUrl);
  console.log('Full Welcome Message:', fullMessage.message);
  
  // Test context-specific messages
  const scubaMessage = getQuickWhatsAppMessage('scuba');
  console.log('Scuba Message URL:', scubaMessage.whatsappUrl);
  console.log('Scuba Message:', scubaMessage.message);
  
  const cruiseMessage = getQuickWhatsAppMessage('cruise');
  console.log('Cruise Message URL:', cruiseMessage.whatsappUrl);
  console.log('Cruise Message:', cruiseMessage.message);
  
  const jetskiMessage = getQuickWhatsAppMessage('jetski');
  console.log('Jet Ski Message URL:', jetskiMessage.whatsappUrl);
  console.log('Jet Ski Message:', jetskiMessage.message);
  
  return {
    fullMessage,
    scubaMessage,
    cruiseMessage,
    jetskiMessage
  };
};

// Function to decode and display the actual message that will be sent
export const decodeWhatsAppMessage = (encodedUrl) => {
  try {
    const url = new URL(encodedUrl);
    const textParam = url.searchParams.get('text');
    if (textParam) {
      return decodeURIComponent(textParam);
    }
    return 'No text parameter found';
  } catch (error) {
    return 'Invalid URL';
  }
};
