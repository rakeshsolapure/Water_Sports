import { motion } from 'framer-motion';
import './Css/About.css';

const motionCommon = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const bookWithUsCards = [
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM4 6H20V18H4V6Z"/>
      </svg>
    ),
    title: "Instant Booking",
    desc: "Get instant confirmation on your email or Whatsapp. Get Further details regarding your trip.",
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V16ZM6 8H18V16H6V8Z"/>
      </svg>
    ),
    title: "Easy Transfer",
    desc: "Get free pick up from All Goa Popular Location from Your Hotel. After the trip Drop Off to your Hotel.",
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
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
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"/>
      </svg>
    ),
    title: 'Phone',
    content: <a href="tel:+91-9209768924" className="contact-link">+91-9209768924</a>,
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
      </svg>
    ),
    title: 'Live Chat',
    content: <button className="contact-link">Start Chat</button>,
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
      </svg>
    ),
    title: 'Email',
    content: <a href="mailto:watersports@gmail.com" className="contact-link">watersports@gmail.com</a>,
  },
];

const About = () => (
  <div className="about-container">
    <div className="about-content">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">
            Welcome To Divesport Adventure! Your Ultimate Water Sports Destination In Goa.
          </h1>
          <div className="about-text-container">
            <p className="about-text">
              Divesport was born in Goa – near Calangute Circle with one mission: to 
              "provide high-quality Scuba and Water sports experience for the 
              traveller seeking adventure and exclusivity".
            </p>
            <p className="about-text">
              After intensive groundwork for more than 4 years, we discovered a lot of 
              scuba locations uncrowded and rich in underwater life which can't be 
              discovered if you have never been there.
            </p>
            <div className="pt-6">
              <h2 className="about-subtitle">
                Why Choose Divesport?
              </h2>
              <ul className="feature-list">
                {
                  [
                    "Professional PADI certified instructors",
                    "Top-quality equipment and safety measures",
                    "Exclusive diving spots away from crowds",
                    "Personalized attention for beginners",
                    "Comprehensive water sports packages",
                    "Flexible scheduling and pickup services"
                  ].map((item, index) => (
                    <li key={index} className="feature-item">
                      <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="video-container"
        >
          <div className="video-wrapper">
            <video
              className="video-element"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/about/video-poster.jpg"
            >
              <source src="/videos/watersports.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <button 
                className="play-button"
                onClick={e => {
                  const video = e.currentTarget.parentElement.previousElementSibling;
                  if (video.paused) video.play();
                  else video.pause();
                }}
              >
                <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
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
        <h2 className="about-subtitle">
          We Offer Activities and Goa Tour
        </h2>
        {/* Add your activities grid or content here */}
      </motion.div>
    </div>

    {/* Popular Activities Section */}
    <section className="activities-section">
      <motion.div
        {...motionCommon}
        transition={{ duration: 0.8 }}
        className="section-header"
      >
        <h2 className="section-title">
          Popular Activities To Do in Goa
        </h2>
        <p className="section-subtitle">Experience The Thrill</p>
      </motion.div>
      <div className="activities-grid">
        {/* Activity Card 1 */}
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.5 }}
          className="activity-card"
        >
          <div className="card-image-container">
            <span className="sale-badge">
              Sale!
            </span>
            <img src="src/assets/scuba_pixel.jpg" alt="Scuba Diving Grand Island" className="card-image" />
            <div className="thumbnails-container">
              <img src="src/assets/Scuba-Diving-at-Malvan-1.jpg" alt="" className="thumbnail"/>
              <img src="src/assets/scuba_pixel.jpg" alt="" className="thumbnail"/>
              <img src="src/assets/Scuba_Dive.jpg" alt="" className="thumbnail"/>
            </div>
          </div>
          <div className="card-content">
            <div className="activity-type">Scuba Diving</div>
            <h3 className="activity-title">
              Scuba Diving in Goa at Grand Island+ Watersports Combo
            </h3>
            <p className="activity-description">
              Unleash your inner adventurer on a journey to Grand Island in Goa! Prepare for a ...
            </p>
            <div className="price-container">
              <div className="current-price">₹3,000.00</div>
              <div className="original-price">₹4,500.00</div>
            </div>
            <button className="details-button">
              View Details
            </button>
          </div>
        </motion.div>
        {/* Activity Card 2 */}
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="activity-card"
        >
          <div className="card-image-container">
            <span className="sale-badge">
              Sale!
            </span>
            <img src="src/assets/Professional.jpg" alt="Water Sports Combo" className="card-image" />
            <div className="thumbnails-container">
              <img src="src/assets/parasailing.jpg" alt="" className="thumbnail"/>
              <img src="src/assets/jet_Ski.jpg" alt="" className="thumbnail"/>
              <img src="src/assets/AdventureActivites-in-Goa.jpg" alt="" className="thumbnail"/>
            </div>
          </div>
          <div className="card-content">
            <div className="activity-type">Water Sports</div>
            <h3 className="activity-title">
              Water Sports in Goa Full Combo
            </h3>
            <p className="activity-description">
              Experience the thrill of watersports amidst the stunning beaches of Goa with Divesport! Our range of ...
            </p>
            <div className="price-container">
              <div className="current-price">₹1,800.00</div>
              <div className="original-price">₹2,500.00</div>
            </div>
            <button className="details-button">
              View Details
            </button>
          </div>
        </motion.div>
        {/* Activity Card 3 */}
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="activity-card"
        >
          <div className="card-image-container">
            <span className="sale-badge">
              Sale!
            </span>
            <img src="/images/activities/scuba-watersports.jpg" alt="Scuba and Watersports" className="card-image" />
            <div className="thumbnails-container">
              <img src="/images/activities/combo-thumb-1.jpg" alt="" className="thumbnail"/>
              <img src="/images/activities/combo-thumb-2.jpg" alt="" className="thumbnail"/>
              <img src="/images/activities/combo-thumb-3.jpg" alt="" className="thumbnail"/>
            </div>
          </div>
          <div className="card-content">
            <div className="activity-type">Scuba Diving</div>
            <h3 className="activity-title">
              Scuba Diving in Goa with Watersports Combo
            </h3>
            <p className="activity-description">
              Embark on an extraordinary underwater journey to explore the mesmerizing ...
            </p>
            <div className="price-container">
              <div className="current-price">₹2,500.00</div>
              <div className="original-price">₹3,500.00</div>
            </div>
            <button className="details-button">
              View Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Book With Us Section */}
    <section className="book-section">
      <div className="book-bg" style={{ backgroundImage: "url('src/assets/istockphoto-975764142-612x612.jpg')" }}>
        <div className="book-overlay"></div>
      </div>
      <div className="book-content">
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.8 }}
          className="book-header"
        >
          <h2 className="book-title">Book With Us</h2>
        </motion.div>
        <div className="book-grid">
          {bookWithUsCards.map((card, idx) => (
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="book-card"
              key={card.title}
            >
              <div className="card-icon">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.desc}</p>
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
            className="book-button"
          >
            Book on WhatsApp
            <svg className="whatsapp-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="contact-section">
      <div className="contact-content">
        <motion.div
          {...motionCommon}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <div className="contact-icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
            </svg>
          </div>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            We love to answer all your questions. Feel free to contact us.
          </p>
        </motion.div>
        <div className="contact-grid">
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={detail.title}
              {...motionCommon}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="contact-card"
            >
              <div className="contact-card-icon">
                {detail.icon}
              </div>
              <h3 className="contact-card-title">{detail.title}</h3>
              {detail.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <nav className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/Gallery" className="footer-link">Gallery</a>
            <a href="/Contact" className="footer-link">Contact</a>
          </nav>
          <div className="footer-text">
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
      className="whatsapp-float"
    >
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
      </svg>
    </a>
  </div>
);

export default About;