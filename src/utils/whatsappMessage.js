// WhatsApp message configuration
export const getWhatsAppMessage = () => {
  // User-friendly message with clear instructions
  const welcomeMessage = "Hii! I'm interested in your water sports packages. Please send me:\n• Available packages and pricing\n• Latest offers and discounts\n• Booking procedure\n• Contact information\n";
//   const welcomeMessage = `🏖️ *Welcome to Goa Travel Mart - Water Sports & Tours!* 🏖️

// 👋 *Hello!* Thank you for your interest in our amazing water sports adventures in Goa!

// 🌊 *Our Services:*
// • Scuba Diving (Premium Island Sea Trip)
// • Jet Ski Adventures 
// • Parasailing Experience
// • SWASTIK Family Cruise (Goa's No.1 Biggest Cruise)
// • Boat Rides & Beach Adventures
// • Dolphin Trips
// • Grand Island Tours

// 🎯 *Latest Offers:*
// 🔥 *30% OFF* on all water sports packages!
// 🎁 *FREE* Scuba Diving Video & Photos
// 🍽️ *Complimentary* Breakfast & Lunch included
// 🚌 *FREE* AC Transport Pickup & Drop
// 🥤 *2 FREE Drinks* (Alcoholic/Non-Alcoholic) on cruise

// 💰 *Starting Prices:*
// • Single Water Sports: From ₹499/-
// • Scuba Diving: From ₹3000/-
// • Family Cruise: From ₹1800/-
// • Jet Ski: From ₹3000/-

// 📞 *Contact Details:*
// • Phone: +91-9209768924
// • Email: goatravelm@gmail.com
// • Location: Shop no.7, Ground floor, Kamat Holidays Homes 3, Behind Old Newton's Supermarket, Calangute, Goa 403516

// ⏰ *Operating Hours:* 9:00 AM - 5:00 PM (All Days)

// 🎖️ *Why Choose Us?*
// ✅ 8+ Years Experience
// ✅ 13,200+ Happy Customers
// ✅ Professional Certified Instructors
// ✅ Best Safety Equipment
// ✅ Instant Booking Confirmation

// 🚀 *Ready to book your adventure?* Please let us know:
// • Which activities interest you?
// • Number of people
// • Preferred date
// • Any special requirements

// *Just click SEND to confirm your booking!* 📱
// We'll get back to you within minutes with the best deals! 🏄‍♂️`;

  // Clean phone number (remove all non-numeric characters except +)
  const phoneNumber = '919209768924'; // WhatsApp format without + sign
  
  // URL encode the message for WhatsApp
  const encodedMessage = encodeURIComponent(welcomeMessage);
  
  return {
    message: welcomeMessage,
    encodedMessage: encodedMessage,
    whatsappUrl: `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  };
};

// Alternative shorter message for specific contexts
export const getQuickWhatsAppMessage = (context = '') => {
  let contextMessage = '';
  
  switch(context) {
    case 'scuba':
      contextMessage = `🏊‍♂️ *Scuba Diving Booking Inquiry*

Hi! I'm interested in your Scuba Diving package. Please send me:
• Package details and pricing
• Available dates and timings
• What's included in the package
• Any special requirements

*Please click SEND to confirm your inquiry!* 📱`;
      break;
    case 'cruise':
      contextMessage = `🚢 *SWASTIK Family Cruise Booking*

Hi! I'd like to book the SWASTIK Family Cruise. Please provide:
• Available timings and rates
• Package inclusions
• Booking procedure
• Group size options

*Please click SEND to confirm your booking request!* 📱`;
      break;
    case 'jetski':
      contextMessage = `🏄‍♂️ *Jet Ski Adventure Booking*

Hi! I want to book Jet Ski adventure. Please share:
• Package details and offers
• Available time slots
• Safety requirements
• Group booking options

*Please click SEND to confirm your booking!* 📱`;
      break;
    default:
      contextMessage = `🏖️ *Water Sports Package Inquiry*

Hi! I'm interested in your water sports packages. Please send me:
• Available packages and pricing
• Latest offers and discounts
• Booking procedure
• Contact information

*Please click SEND to get started!* 📱`;
  }
  
  // Clean phone number (WhatsApp format without + sign)
  const phoneNumber = '919209768924';
  const encodedMessage = encodeURIComponent(contextMessage);
  
  return {
    message: contextMessage,
    encodedMessage: encodedMessage,
    whatsappUrl: `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  };
};
