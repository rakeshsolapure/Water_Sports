import { motion } from 'framer-motion';
import './Css/Gallery.css';

const motionCommon = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const features = [
  {
    icon: (
      <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 14.1C21 16.8 18.9 19 16.2 19H14.8L12 22L9.2 19H7.8C5.1 19 3 16.8 3 14.1V7.9C3 5.2 5.1 3 7.8 3H16.2C18.9 3 21 5.2 21 7.9V14.1Z"/>
      </svg>
    ),
    title: "Dive Into Goa's Marvels:",
    desc: <><span className="feature-desc-bold">Grand Island:</span> The most popular dive site, known for its clear waters and a wide array of marine life.</>,
  },
  {
    icon: (
      <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 6V18H20V6H4ZM12 7L16 11H13V17H11V11H8L12 7Z"/>
      </svg>
    ),
    title: "Capture Every Moment In HD",
    desc: "Swim alongside vibrant fish, and majestic corals, and take stunning HD memories home.",
  },
  {
    icon: (
      <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
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
    <div className="gallery-container">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1 className="hero-title">
                Experience Scuba Diving in Goa!
              </h1>
              <h2 className="hero-subtitle">
                Best Rated Scuba Diving in Goa, Grand Island
              </h2>
              <p className="hero-description">
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
              className="hero-image-container"
            >
              <img 
                src="/images/gallery/scuba-hero.jpg" 
                alt="Scuba Diving in Goa"
                className="hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="photo-grid-section">
        <div className="container">
          <motion.h2
            {...motionCommon}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Explore Our Underwater Gallery
          </motion.h2>
          <div className="photo-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="photo-card"
              >
                <img
                  src={`/images/gallery/scuba-${item}.jpg`}
                  alt={`Gallery Image ${item}`}
                  className="photo-image"
                />
                <div className="photo-overlay">
                  <div className="photo-overlay-content">
                    <button className="view-button">
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
      <section className="why-choose-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title-light"
          >
            Why Choose Divesport for Scuba Diving in Goa?
          </motion.h2>
          <div className="why-choose-grid">
            {whyChoose.slice(0, 6).map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="why-choose-item"
              >
                <div className="why-choose-icon-container">
                  <svg className="why-choose-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="why-choose-text">{feature}</span>
              </motion.div>
            ))}
          </div>
          <div className="why-choose-grid-secondary">
            {whyChoose.slice(6).map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="why-choose-item"
              >
                <div className="why-choose-icon-container">
                  <svg className="why-choose-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="why-choose-text">{feature}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cta-container"
          >
            <a
              href="https://wa.me/your_number"
              className="cta-button"
            >
              <svg className="whatsapp-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
              </svg>
              Book The Best Experience
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="reviews-header"
          >
            <h2 className="reviews-title">
              Divesport Reviews
            </h2>
            <p className="reviews-subtitle">
              Creating extraordinary personalized experiences for our customers is our life's passion, 
              but the joy we bring to the lives of others is truly the most fulfilling reward.
            </p>
          </motion.div>
          <div className="reviews-grid">
            {/* Example Review Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="review-card"
            >
              {/* Add review content here */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book With Us Section */}
      <section className="book-section">
        <div className="book-background">
          <div className="book-overlay"></div>
        </div>
        <div className="container book-content">
          <motion.div
            {...motionCommon}
            transition={{ duration: 0.8 }}
            className="book-header"
          >
            <h2 className="book-title">
              Book With Us
            </h2>
          </motion.div>
          <div className="book-grid">
            {/* Instant Booking */}
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5 }}
              className="book-card"
            >
              <div className="book-icon-container">
                <svg className="book-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM4 6H20V18H4V6Z"/>
                </svg>
              </div>
              <h3 className="book-card-title">
                Instant Booking
              </h3>
              <p className="book-card-description">
                Get instant confirmation on your email or Whatsapp. Get Further details regarding your trip.
              </p>
            </motion.div>
            {/* Easy Transfer */}
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="book-card"
            >
              <div className="book-icon-container">
                <svg className="book-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V16ZM6 8H18V16H6V8Z"/>
                </svg>
              </div>
              <h3 className="book-card-title">
                Easy Transfer
              </h3>
              <p className="book-card-description">
                Get free pick up from All Goa Popular Location from Your Hotel. After the trip Drop Off to your Hotel.
              </p>
            </motion.div>
            {/* Pre-Booking Discount */}
            <motion.div
              {...motionCommon}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="book-card"
            >
              <div className="book-icon-container">
                <svg className="book-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 5V19H19V5H5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM7 7H17V9H7V7Z"/>
                </svg>
              </div>
              <h3 className="book-card-title">
                Pre-Booking Discount
              </h3>
              <p className="book-card-description">
                Get pre-booking discounts on the best Scuba Diving & Water Sports Packages in Goa.
              </p>
            </motion.div>
          </div>
          <motion.div
            {...motionCommon}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="book-cta-container"
          >
            <a 
              href="https://wa.me/your_number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="book-cta-button"
            >
              Book on WhatsApp
              <svg className="whatsapp-icon-small" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Guidelines Section */}
      <section className="contact-guidelines-section">
        <div className="container">
          <div className="contact-guidelines-grid">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-form-container"
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
              <form className="form">
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
              className="guidelines-container"
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

              <div className="covid-guidelines">
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
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="footer-text">
              Powered By Watersports...!
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;