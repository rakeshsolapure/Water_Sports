import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import './Css/Home.css';

// ... (all your arrays remain the same)

const activityCards = [
  {
    img: 'src/assets/water-sports----171579632-612x612.jpg',
    alt: 'Goa Boat Ride',
    title: 'Goa Boat Ride And Beach Adventure',
    desc: 'Experience serene boat rides or dive into exhilarating beach adventure sports in the vibrant paradise of Goa.',
  },
  {
    img: 'src/assets/AdventureActivites-in-Goa.jpg',
    alt: 'Goa Adventure Activities',
    title: 'Goa Adventure Activities Packages',
    desc: 'From thrilling water sports at Calangute Beach to adventure-packed activities across Goa, our packages promise excitement for all.',
  },
  {
    img: 'src/assets/Scuba-Diving-at-Malvan-1.jpg',
    alt: 'Scuba Diving in Goa',
    title: 'Scuba Diving In Goa',
    desc: 'Receive professional training, plunge into the ocean, and create unforgettable moments in Goa.',
    badge: 'BEST RATED',
  },
  {
    img: 'src/assets/dudhsagar1046207456-612x612.jpg',
    alt: 'Dudhsagar Waterfall',
    title: 'Dudhsagar Waterfall Trip',
    desc: "Book Your Adventure: Embark on an unforgettable journey to the 'Sea of Milk.'",
    badge: 'BEST TRIP',
  },
  {
    img: 'src/assets/Grande-Island-Goa.jpg',
    alt: 'Grand Island Trip',
    title: 'Grand Island Trip Goa',
    desc: 'Plunge into crystal-clear waters for a mesmerizing scuba diving adventure.',
    badge: 'BEST SELLING',
  },
  {
    img: 'src/assets/casino-Goa.jpg',
    alt: 'Dinner Cruise Party',
    title: 'Dinner Cruise Party In Goa',
    desc: 'Enchanting Night Voyage: Dive into the Vibrant Nightlife of Goa.',
  },
  {
    img: 'src/assets/Dolphin-Trip.jpg',
    alt: 'Dolphin Trip',
    title: 'Dolphin Trip',
    desc: "Enchanting Dolphin Trip: Dive into the Magic of Goa's Waters.",
  },
  {
    img: 'src/assets/South-Goa-collage.jpg',
    alt: 'South Goa',
    title: 'South Goa',
    desc: 'Unleash the Energy of North Goa: Stunning beaches, lively shacks, vibrant nightlife, and thrilling adventures await your arrival.',
  },
  {
    img: 'src/assets/NorthGoa-Collage.jpg',
    alt: 'North Goa',
    title: 'North Goa',
    desc: 'Discover the Charm of South Goa: Pristine beaches, serene temples, vibrant markets, and a touch of heritage await your exploration.',
  },
];

const whyChooseCards = [
  {
    img: "src/assets/best-customer-experience.png",
    alt: 'Best Experience',
    title: 'Best Experience',
    desc: 'Professional service with certified instructors and top-quality equipment.'
  },
  {
    img: "src/assets/safety-first.jpg",
    alt: 'Safety First',
    title: 'Safety First',
    desc: 'Comprehensive safety measures and experienced guides for your protection.'
  },
  {
    img: "src/assets/expert-crew.jpg",
    alt: 'Expert Crew',
    title: 'Expert Crew',
    desc: 'Skilled and friendly team dedicated to making your adventure memorable.'
  },
  {
    img: "src/assets/modern-fleet.jpg",
    alt: 'Modern Fleet',
    title: 'Modern Fleet',
    desc: 'Well-maintained equipment and boats for a comfortable adventure.'
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

const covidGuidelines = [
  "Regular temperature checks for staff and participants upon arrival",
  "Hand sanitiser available to travellers and staff",
  "Transportation vehicles are regularly sanitised",
  "Gear/equipment sanitised between uses",
  "Face masks are required for travellers",
  "Social distancing enforced throughout the experience"
];

const featuresList = [
  { icon: "🏊‍♂️", text: "Real Scuba Experience" },
  { icon: "🌊", text: "Fun rides in Watersports" },
  { icon: "🎖️", text: "Professional & Expert Instructors" },
  { icon: "🛠️", text: "Quality & Best Equipment's" },
  { icon: "📱", text: "Instant Booking Confirmation on Phone" },
  { icon: "💳", text: "Pre Booking Discount available" },
  { icon: "✅", text: "Certified & Safe activities" },
  { icon: "👀", text: "Enjoy Best Day in Goa." }
];

const videoList = [
  { src: "https://www.youtube.com/embed/abc123xyz", title: "Scuba diving in goa |water-sports-and-tours" },
  { src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2", title: "Dive into the Depths with Divesport" },
  { src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3", title: "Scuba diving in goa" },
  { src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4", title: "Couple Scuba diving in Goa" },
];

const motionCommon = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Home = () => (
  <>
    <div className="home-container">
      <Hero />

      {/* Jet Ski Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="jet-ski-container"
          >
            <div className="image-container">
              <div className="image-wrapper">
                <img
                  src="src/assets/jet_Ski.jpg"
                  alt="Jet Ski Adventure"
                  className="responsive-image"
                />
                <div className="image-overlay" />
                <div className="image-content">
                  <p className="price-text">from 3000/-</p>
                  <p className="time-text">Time 07am To 05:30pm</p>
                </div>
              </div>
            </div>

            <div className="content-container">
              <h2 className="section-title">Scuba Diving and Water Sports at Grand Island</h2>
              <p className="section-description">
                Experience the thrill of riding waves at high speed. Perfect for adventure seekers and water sports enthusiasts.
              </p>

              <div className="package-container">
                <h4 className="package-title">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Package Includes
                </h4>
                <div className="package-grid">
                  {[
                    "Hotel pickup and drop-off AC transport",
                    "BUMPER RIDE",
                    "JET SKI",
                    "BANANA RIDE",
                    "SPEED BOAT RIDE",
                    "Refreshments",
                    "Breakfast(Veg/ Non Veg.)",
                    "Buffet lunch(Veg/ Non Veg.)",
                    "Pre-training session & Shallow Water",
                    "Padi Expertise Guidance Professional instructor",
                    "Safety equipment",
                    "Complementary Scuba Diving Vedio and Photo opportunities",
                  ].map((item, i) => (
                    <div key={`item-${i}`} className="package-item">
                      <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="item-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="cta-button">
                Book Now
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parasailing Section */}
      <section className="section-padding bg-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="parasailing-container"
          >
            <div className="image-container reverse-order">
              <div className="image-wrapper">
                <img
                  src="src/assets/swas.jpeg"
                  alt="Parasailing Experience"
                  className="responsive-image"
                />
                <div className="image-overlay" />
                <div className="image-content">
                  <p className="price-text">from 1800/-</p>
                  <p className="time-text">Trip Timings 8:30pm 11:00pm</p>
                </div>
              </div>
            </div>

            <div className="content-container">
              <h2 className="section-title">SWASTIK : Goa's No 1 BIGGEST FAMILY CRUISE</h2>
              <p className="section-description">
                TRIPLE DECK WITH AC DISCOTHEQUE AND OPEN SKIES, DINE WITH THE WAVES
              </p>
              
              <div className="package-container">
                <h4 className="package-title">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Package Includes
                </h4>
                <div className="package-grid">
                  {[
                    "UPPER DECK OPEN TO SKY",
                    "NON STOP DJ & DANCE ON AC DECK",
                    "VARIOUS DANCE PERFORMANCES",
                    "LIVE DJ",
                    "LIVE MAGIC SHOW FOR KIDS",
                    "UNLIMITED BUFFET DINNER (VEG/NON-VEG)",
                    "2 COMPLEMENTARY DRINKS (ALCOHOLIC/NON ALCOHOLIC)",
                    "FUN GAMES & ENTERTAINMENT",
                    "FLOATING CASINOS",
                    "ADIL SHAH PALACE",
                    "PANJIM CITY",
                    "REIS MAGOS FORT",
                    "FORT AGUADA",
                    "CENTRAL JAIL",
                  ].map((item, i) => (
                    <div key={`item-${i}`} className="package-item">
                      <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="item-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="cta-button">
                Book Now
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scuba Diving Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="jet-ski-container"
          >
            <div className="image-container">
              <div className="image-wrapper">
                <img
                  src="src/assets/scuba_pixel.jpg"
                  alt="Scuba Diving Expedition"
                  className="responsive-image"
                />
                <div className="image-overlay" />
                <div className="image-content">
                  <p className="price-text">from $149</p>
                  <p className="time-text">4 hours</p>
                </div>
              </div>
            </div>

            <div className="content-container">
              <h2 className="section-title">Scuba Diving in Goa Island sea Trip Package-(Premium)</h2>
              <p className="section-description">
                Explore the vibrant underwater world with our expert diving instructors. Discover coral reefs and marine life.
              </p>

              <div className="package-container">
                <h4 className="package-title">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Package Includes
                </h4>
                <div className="package-grid">
                  {[
                    "Pickup and Drop AC Transport",
                    "Breakfast and lunch",
                    "Professional instructor",
                    "Complete diving equipment",
                    "Pre-training session & Shallow Water Dive",
                    "Padi Expertise Guidance",
                    "Breakfast",
                    "Lunch (veg/Non Veg.), Mineral Water",
                    "Complementary Scuba Diving Video",
                    "Sightseeing",
                  ].map((item, i) => (
                    <div key={`item-${i}`} className="package-item">
                      <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="item-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="cta-button">
                Book Now
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="activities-grid">
            {activityCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="activity-card"
              >
                <div className="activity-image-container">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="activity-image"
                  />
                  <div className="activity-overlay"></div>
                  <div className="activity-content">
                    {card.badge && (
                      <div className="activity-badge">
                        {card.badge}
                      </div>
                    )}
                    <h3 className="activity-title">{card.title}</h3>
                    <p className="activity-description">{card.desc}</p>
                    <a
                      href="https://wa.me/+918484810061"
                      className="activity-link"
                    >
                      Get Details
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scuba Diving Videos Section */}
      <section className="section-padding bg-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="video-section-title">
              Scuba Diving Videos
            </h2>
          </motion.div>
          <div className="videos-grid">
            {videoList.map((video, idx) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="video-container"
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://www.youtube.com/@divesport"
              target="_blank"
              rel="noopener noreferrer"
              className="video-link-button"
            >
              View More Videos
              <svg
                className="button-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="why-choose-title"
          >
            Why Choose water-sports-and-tours for Your Goa Adventures?
          </motion.h2>

          <div className="why-choose-grid">
            {whyChooseCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="why-choose-card"
              >
                <div className="why-choose-image-container">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="why-choose-image"
                  />
                  <div className="why-choose-overlay" />
                </div>
                <h3 className="why-choose-card-title">{card.title}</h3>
                <p className="why-choose-card-description">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://wa.me/+918484810061"
          className="cta-link-button"
        >
          Get Details & Discount Offers
        </a>
      </motion.div>

      {/* About Scuba & Water Sports Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-container">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-left"
            >
              <p className="about-subtitle">Enjoy Best Day in Goa</p>
              <h2 className="about-title">
                About Scuba Diving & Water Sports in Goa.
              </h2>
              
              <div className="about-content">
                <p>
                  Scuba diving experience in Goa should be on everyone's list of must-to-do activities in Goa. 
                  Divesport is famous for providing a kind experience when it comes to water sports and scuba 
                  diving in Goa With a depth ranging from 10-15 meters.
                </p>
                
                <p>
                  At Divesport we strive to provide the best 1st scuba experience in Goa. we have been here 
                  for 8+ years and serve thousands of travellers every season.
                </p>
                
                <p className="about-highlight">
                  Nothing is more enjoyable in Goa. Just Come and enjoy your best day over the Arabian Sea.
                </p>
              </div>

              <div className="stats-container">
                <div className="stats-number">13,200+</div>
                <div className="stats-label">Happy Customers</div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-right"
            >
              <h3 className="experience-title">
                Get the Best Experience in Scuba Diving & Watersports
              </h3>
              <p className="experience-subtitle">
                Best Service, We Strive To Provide Our Customers.
              </p>

              <div className="features-list">
                {featuresList.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="feature-item"
                  >
                    <span className="feature-icon">{item.icon}</span>
                    <span className="feature-text">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pricing-container">
                <p className="pricing-text">
                  Single Water Sports Ride Starting Only @ 499/- near Calangute & Baga beach.
                </p>
                
                <button className="pricing-button">
                  Get Videos & Details on Phone
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-header"
          >
            <div className="contact-icon-container">
              <svg 
                className="contact-icon" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
              </svg>
            </div>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              We love to answer all your questions. Feel free to contact us.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="contact-item"
            >
              <div className="contact-item-icon">
                <svg 
                  className="contact-svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"/>
                </svg>
              </div>
              <h3 className="contact-item-title">Phone</h3>
              <a 
                href="tel:+91-9209768924" 
                className="contact-link"
              >
                +91-9209768924
              </a>
            </motion.div>

            {/* Live Chat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="contact-item"
            >
              <div className="contact-item-icon">
                <svg 
                  className="contact-svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                </svg>
              </div>
              <h3 className="contact-item-title">Live Chat</h3>
              <button className="contact-link">
                Start Chat
              </button>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="contact-item"
            >
              <div className="contact-item-icon">
                <svg 
                  className="contact-svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
              </div>
              <h3 className="contact-item-title">Email</h3>
              <a 
                href="mailto:watersports@gmail.com" 
                className="contact-link"
              >
                watersports@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="contact-form-container">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-form"
            >
              <div className="form-header">
                <span className="form-icon">☀️</span>
                <h2 className="form-title">
                  Exclusive Limited-Time Offer: Get 30% Off!
                </h2>
              </div>

              <p className="form-description">
                Ready to elevate your experience? Fill out the form now and unlock an incredible 30% discount 
                on your next adventure! Don't miss out – this offer won't last long. Dive into excitement with us!
              </p>

              <form className="form-fields">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="Your Phone"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-button"
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
              className="contact-info"
            >
              <div className="info-section">
                <h2 className="info-title">Divesport.in</h2>
                
                <div className="info-content">
                  <div className="info-item">
                    <h3 className="info-subtitle">Email:</h3>
                    <a href="mailto:watersports@gmail.com" className="info-link">
                      watersports@gmail.com
                    </a>
                  </div>

                  <div className="info-item">
                    <h3 className="info-subtitle">Address:</h3>
                    <p className="info-text">
                      Shop no.7, Ground floor kamat holidays homes 3 behind old Newton's supermarket Calangute, Goa 403516
                    </p>
                  </div>

                  <div className="info-item">
                    <h3 className="info-subtitle">Hours:</h3>
                    <p className="info-text">
                      Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
                      <br />
                      09:00 – 17:00
                    </p>
                  </div>

                  <div className="info-item">
                    <h3 className="info-subtitle">Reservations:</h3>
                    <a href="tel:+91-9209768924" className="info-link">
                      +91-9209768924
                    </a>
                  </div>
                </div>
              </div>

              <div className="guidelines-section">
                <h2 className="guidelines-title">
                  Travel Guidelines During Covid
                </h2>
                <h3 className="guidelines-subtitle">
                  What you can expect during your visit?
                </h3>
                <ul className="guidelines-list">
                  {covidGuidelines.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="guideline-item"
                    >
                      <svg className="guideline-icon" fill="currentColor" viewBox="0 0 20 20">
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
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <nav className="footer-nav">
              <a href="/" className="footer-link">Home</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/gallery" className="footer-link">Gallery</a>
              <a href="/contact" className="footer-link">Contact</a>
            </nav>
            <div className="footer-text">
              Powered By Watersports...!
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/+918484810061" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <svg 
          className="whatsapp-icon" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
        </svg>
      </a>
    </div>
  </>
);

export default Home;