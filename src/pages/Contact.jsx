import { useState } from 'react';
import { motion } from 'framer-motion';
import './Css/Contact.css';

const motionCommon = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/Gallery', label: 'Gallery' },
  { href: '/Contact', label: 'Contact' },
];

const faqs = [
  {
    question: "What activities do you offer?",
    answer: "We offer a wide range of water sports activities including jet skiing, parasailing, scuba diving, and more."
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior experience is needed for most activities. Our certified instructors will provide all necessary training."
  },
  {
    question: "What safety measures do you have in place?",
    answer: "We maintain strict safety protocols and use top-quality equipment. All activities are supervised by certified instructors."
  },
  {
    question: "How can I make a booking?",
    answer: "You can book through our website, by phone, or by visiting our location. We recommend booking in advance during peak season."
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setServerError(null);
    setLoading(true);

    try {
      const resp = await fetch('http://localhost:5000/api/send-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await resp.json();
      if (resp.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        console.error('SMS API error', data);
        setServerError(data.error || 'Server error');
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Network error', err);
      setServerError(err.message || 'Network error');
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
        />
        <div className="hero-content">
          <div className="hero-text-container">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in touch with our team
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Opposite to panchayat lane, 2, 172/C, NAIKA VADDO, Calangute, Goa 403516</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+91 92097 68924</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('goatravelm@gmail.com')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        goatravelm@gmail.com
      </a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Operating Hours</h3>
                    <p>Monday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  title="Location Map"
                  className="map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3843.904240314512!2d73.76047897512493!3d15.543263385062604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDMyJzM1LjgiTiA3M8KwNDUnNDcuMCJF!5e0!3m2!1sen!2sin!4v1760863994603!5m2!1sen!2sin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {serverError && <p className="form-message error-message">{serverError}</p>}
                {submitStatus === 'success' && (
                  <p className="form-message success-message">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="form-message error-message">Error sending message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...motionCommon}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="faq-item"
              >
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
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
              Powered By GoaTravelMart...!
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;