import { motion } from 'framer-motion';

const motionCommon = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 14.1C21 16.8 18.9 19 16.2 19H14.8L12 22L9.2 19H7.8C5.1 19 3 16.8 3 14.1V7.9C3 5.2 5.1 3 7.8 3H16.2C18.9 3 21 5.2 21 7.9V14.1Z"/>
      </svg>
    ),
    title: "Dive Into Goa's Marvels:",
    desc: <><span className="font-semibold">Grand Island:</span> The most popular dive site, known for its clear waters and a wide array of marine life.</>,
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 6V18H20V6H4ZM12 7L16 11H13V17H11V11H8L12 7Z"/>
      </svg>
    ),
    title: "Capture Every Moment In HD",
    desc: "Swim alongside vibrant fish, and majestic corals, and take stunning HD memories home.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"/>
      </svg>
    ),
    title: "First-Time Diver? No Worries!",
    desc: "Perfect for non-swimmers & beginners. PADI Certified experts for a safe dive experience. Dedicated guidance every bubble of the way.",
  },
];

const whyChoose = [
  "Real Scuba Diving Experience",
  "Thrilling Water Sports in Goa",
  "PADI Certified Diver Trainers",
  "Maximum Dive in Time in Goa",
  "HD Underwater GoPro Videoshoot",
  "Bestrated For Non-Swimmers",
  "Pre Booking Discount available",
  "Instant Seat Reservation Ticket",
];

const covidGuidelines = [
  "Regular temperature checks for staff and participants upon arrival",
  "Hand sanitiser available to travellers and staff",
  "Transportation vehicles are regularly sanitised",
  "Gear/equipment sanitised between uses",
  "Face masks are required for travellers",
  "Social distancing enforced throughout the experience"
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/Gallery', label: 'Gallery' },
  { href: '/Contact', label: 'Contact' },
];

const Gallery = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Experience Scuba Diving in Goa!
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Best Rated Scuba Diving in Goa, Grand Island
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Ready to dive into the blue? Scuba diving in Goa is not just an activity; it's an experience 
                that stays with you. Embrace this opportunity to witness the serene and vibrant underwater world. 
                Whether you're a seasoned diver or a beginner, the clear, balmy waters of Goa are a perfect 
                backdrop for your underwater exploration.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/gallery/scuba-hero.jpg" 
                alt="Scuba Diving in Goa"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...motionCommon}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Explore Our Underwater Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={`/images/gallery/scuba-${item}.jpg`}
                  alt={`Gallery Image ${item}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="px-6 py-2 bg-white text-gray-900 rounded-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                      View Larger
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Divesport Section */}
      <section className="py-20 bg-purple-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Divesport for Scuba Diving in Goa?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whyChoose.slice(0, 6).map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-12">
            {whyChoose.slice(6).map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://wa.me/your_number"
              className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition duration-300"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
              </svg>
              Book The Best Experience
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-6">
              Divesport Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating extraordinary personalized experiences for our customers is our life's passion, 
              but the joy we bring to the lives of others is truly the most fulfilling reward.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Review Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              {/* Add review content here */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book With Us Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/istockphoto-975764142-612x612.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...motionCommon}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Book With Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instant Booking */}
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-purple-500 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM4 6H20V18H4V6Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-500 mb-4">
                Instant Booking
              </h3>
              <p className="text-white text-center">
                Get instant confirmation on your email or Whatsapp. Get Further details regarding your trip.
              </p>
            </motion.div>
            {/* Easy Transfer */}
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-purple-500 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V16ZM6 8H18V16H6V8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-500 mb-4">
                Easy Transfer
              </h3>
              <p className="text-white text-center">
                Get free pick up from All Goa Popular Location from Your Hotel. After the trip Drop Off to your Hotel.
              </p>
            </motion.div>
            {/* Pre-Booking Discount */}
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-purple-500 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 5V19H19V5H5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM7 7H17V9H7V7Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-500 mb-4">
                Pre-Booking Discount
              </h3>
              <p className="text-white text-center">
                Get pre-booking discounts on the best Scuba Diving & Water Sports Packages in Goa.
              </p>
            </motion.div>
          </div>
          <motion.div
            {...motionCommon}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a 
              href="https://wa.me/your_number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg transition duration-300"
            >
              Book on WhatsApp
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Guidelines Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">☀️</span>
                <h2 className="text-2xl font-bold text-purple-900">
                  Exclusive Limited-Time Offer: Get 30% Off!
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Ready to elevate your experience? Fill out the form now and unlock an incredible 30% discount 
                on your next adventure! Don't miss out – this offer won't last long. Dive into excitement with us!
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Send
                </button>
              </form>
            </motion.div>

            {/* Right Column - Info & Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Divesport.in</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-700">Email:</h3>
                    <a href="mailto:watersports@gmail.com" className="text-blue-600 hover:underline">
                      watersports@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Address:</h3>
                    <p className="text-gray-600">
                      Shop no.7, Ground floor kamat holidays homes 3 behind old Newton's supermarket Calangute, Goa 403516
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Hours:</h3>
                    <p className="text-gray-600">
                      Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
                      <br />
                      09:00 – 17:00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Reservations:</h3>
                    <a href="tel:+91-9209768924" className="text-blue-600 hover:underline">
                      +91-9209768924
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-6">
                  Travel Guidelines During Covid
                </h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  What you can expect during your visit?
                </h3>
                <ul className="space-y-3">
                  {covidGuidelines.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            <nav className="flex flex-wrap gap-6">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="text-gray-600">
              Powered By Watersports...!
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;