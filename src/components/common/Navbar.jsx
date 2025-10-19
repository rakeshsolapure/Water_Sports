import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaImages, FaEnvelope } from 'react-icons/fa';
import ScrollToTop from './scroolToTop';
import logo from '../../assets/Vibrant Travel Logo with Tropical Icons.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <nav className="navbar" role="navigation" aria-label="Primary">
        <div className="navbar-container">
          {/* Left-aligned logo and title */}
          <div className="navbar-logo-container">
            <img
              src={logo}
              alt="Goa Travel Mart Logo"
              className="h-12 w-12 object-contain rounded-full shadow-md"
            />
            <span style={{
              fontFamily: 'Brush Script MT, cursive',
              fontWeight: 700,
              fontSize: '2.4rem',
              color: '#d686fdff',
              letterSpacing: '0.04em'
            }}>
              Goa Travel Mart
            </span>
            {/* Goa Travel Mart */}
          </div>

          {/* Mobile menu button */}
          <div className="navbar-menu-mobile-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="navbar-menu-desktop">
            <NavLink
              to="/"
              className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}
            >
              <FaHome className="mr-2" />Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}
              onClick={(e) => {
                // force a full page reload/navigation to /about
                e.preventDefault();
                if (window.location.pathname === '/about') {
                  window.location.reload();
                } else {
                  window.location.href = '/about';
                }
              }}
            >
              <FaInfoCircle className="mr-2" />About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}
            >
              <FaImages className="mr-2" />Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}
            >
              <FaEnvelope className="mr-2" />Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-menu-mobile${isOpen ? ' open' : ''}`}>
          <Link 
            to="/" 
            className="navbar-menu-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="navbar-menu-mobile-link"
            onClick={() => {
              setIsOpen(false);
              if (window.location.pathname === '/about') {
                window.location.reload();
              } else {
                window.location.href = '/about';
              }
            }}
          >
            About
          </Link>
          <Link 
            to="/gallery" 
            className="navbar-menu-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className="navbar-menu-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;