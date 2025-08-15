import { motion } from 'framer-motion';

const motionCommon = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const bookWithUsCards = [
  {
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM4 6H20V18H4V6Z"/>
      </svg>
    ),
    title: "Instant Booking",
    desc: "Get instant confirmation on your email or Whatsapp. Get Further details regarding your trip.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V16ZM6 8H18V16H6V8Z"/>
      </svg>
    ),
    title: "Easy Transfer",
    desc: "Get free pick up from All Goa Popular Location from Your Hotel. After the trip Drop Off to your Hotel.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 5V19H19V5H5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM7 7H17V9H7V7Z"/>
      </svg>
    ),
    title: "Pre-Booking Discount",
    desc: "Get pre-booking discounts on the best Scuba Diving & Water Sports Packages in Goa.",
  },
];

const contactDetails = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"/>
      </svg>
    ),
    title: 'Phone',
    content: <a href="tel:+91-9209768924" className="text-purple-600 hover:text-purple-800 transition duration-300">+91-9209768924</a>,
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
      </svg>
    ),
    title: 'Live Chat',
    content: <button className="text-purple-600 hover:text-purple-800 transition duration-300">Start Chat</button>,
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
      </svg>
    ),
    title: 'Email',
    content: <a href="mailto:watersports@gmail.com" className="text-purple-600 hover:text-purple-800 transition duration-300">watersports@gmail.com</a>,
  },
];

const About = () => (
  <div className="pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8">
            Welcome To Divesport Adventure! Your Ultimate Water Sports Destination In Goa.
          </h1>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Divesport was born in Goa – near Calangute Circle with one mission: to 
              "provide high-quality Scuba and Water sports experience for the 
              traveller seeking adventure and exclusivity".
            </p>
            <p className="text-lg">
              After intensive groundwork for more than 4 years, we discovered a lot of 
              scuba locations uncrowded and rich in underwater life which can't be 
              discovered if you have never been there.
            </p>
            <div className="pt-6">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">
                Why Choose Divesport?
              </h2>
              <ul className="space-y-3">
                {
                  [
                    "Professional PADI certified instructors",
                    "Top-quality equipment and safety measures",
                    "Exclusive diving spots away from crowds",
                    "Personalized attention for beginners",
                    "Comprehensive water sports packages",
                    "Flexible scheduling and pickup services"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/about/video-poster.jpg"
            >
              <source src="/videos/watersports.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button 
                className="bg-white/30 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition duration-300"
                onClick={e => {
                  const video = e.currentTarget.parentElement.previousElementSibling;
                  if (video.paused) video.play();
                  else video.pause();
                }}
              >
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        {...motionCommon}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-purple-900 mb-8">
          We Offer Activities and Goa Tour
        </h2>
        {/* Add your activities grid or content here */}
      </motion.div>
    </div>

    {/* Popular Activities Section */}
    <section className="py-20">
      <motion.div
        {...motionCommon}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-900 mb-4">
          Popular Activities To Do in Goa
        </h2>
        <p className="text-xl text-gray-600">Experience The Thrill</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Activity Card 1 */}
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative">
            <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Sale!
            </span>
            <img src="src/assets/scuba_pixel.jpg" alt="Scuba Diving Grand Island" className="w-full h-64 object-cover" />
            <div className="flex gap-2 absolute bottom-4 left-4">
              <img src="src/assets/Scuba-Diving-at-Malvan-1.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
              <img src="src/assets/scuba_pixel.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
              <img src="src/assets/Scuba_Dive.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-purple-900 font-medium mb-2">Scuba Diving</div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              Scuba Diving in Goa at Grand Island+ Watersports Combo
            </h3>
            <p className="text-gray-600 mb-4">
              Unleash your inner adventurer on a journey to Grand Island in Goa! Prepare for a ...
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-purple-900 font-bold text-xl">₹3,000.00</div>
              <div className="text-gray-500 line-through">₹4,500.00</div>
            </div>
            <button className="w-full bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition duration-300">
              View Details
            </button>
          </div>
        </motion.div>
        {/* Activity Card 2 */}
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative">
            <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Sale!
            </span>
            <img src="src/assets/Professional.jpg" alt="Water Sports Combo" className="w-full h-64 object-cover" />
            <div className="flex gap-2 absolute bottom-4 left-4">
              <img src="src/assets/parasailing.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
              <img src="src/assets/jet_Ski.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
              <img src="src/assets/AdventureActivites-in-Goa.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-purple-900 font-medium mb-2">Water Sports</div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              Water Sports in Goa Full Combo
            </h3>
            <p className="text-gray-600 mb-4">
              Experience the thrill of watersports amidst the stunning beaches of Goa with Divesport! Our range of ...
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-purple-900 font-bold text-xl">₹1,800.00</div>
              <div className="text-gray-500 line-through">₹2,500.00</div>
            </div>
            <button className="w-full bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition duration-300">
              View Details
            </button>
          </div>
        </motion.div>
        {/* Activity Card 3 */}
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative">
            <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Sale!
            </span>
            <img src="/images/activities/scuba-watersports.jpg" alt="Scuba and Watersports" className="w-full h-64 object-cover" />
            <div className="flex gap-2 absolute bottom-4 left-4">
              <img src="/images/activities/combo-thumb-1.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
              <img src="/images/activities/combo-thumb-2.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
              <img src="/images/activities/combo-thumb-3.jpg" alt="" className="w-16 h-12 object-cover rounded"/>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-purple-900 font-medium mb-2">Scuba Diving</div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              Scuba Diving in Goa with Watersports Combo
            </h3>
            <p className="text-gray-600 mb-4">
              Embark on an extraordinary underwater journey to explore the mesmerizing ...
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-purple-900 font-bold text-xl">₹2,500.00</div>
              <div className="text-gray-500 line-through">₹3,500.00</div>
            </div>
            <button className="w-full bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition duration-300">
              View Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Book With Us Section */}
    <section className="relative py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/istockphoto-975764142-612x612.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Book With Us</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bookWithUsCards.map((card, idx) => (
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="text-center"
              key={card.title}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-purple-500 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-purple-500 mb-4">{card.title}</h3>
              <p className="text-white text-center">{card.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919318383298"
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

    {/* Contact Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            We love to answer all your questions. Feel free to contact us.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={detail.title}
              {...motionCommon}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                {detail.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">{detail.title}</h3>
              {detail.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <nav className="flex flex-wrap gap-6">
            <a href="/" className="text-gray-600 hover:text-purple-600 transition duration-300">Home</a>
            <a href="/about" className="text-gray-600 hover:text-purple-600 transition duration-300">About</a>
            <a href="/Gallery" className="text-gray-600 hover:text-purple-600 transition duration-300">Gallery</a>
            <a href="/Contact" className="text-gray-600 hover:text-purple-600 transition duration-300">Contact</a>
          </nav>
          <div className="text-gray-600">
            Powered By Watersports...!
          </div>
        </div>
      </div>
    </footer>

    {/* WhatsApp Float Button */}
    <a
      href="https://wa.me/919318383298"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
      </svg>
    </a>
  </div>
);

export default About;