import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.main-header');
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking a link
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="QuantIQ Logo" className="company-logo" />
        <span className="company-name">QuantIQ</span>
      </div>

      {/* Mobile hamburger button */}
      <button
        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#pillars" onClick={() => scrollToSection('pillars')}>Products</a></li>
          <li><a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
          <li><a href="#why-quantiq" onClick={() => scrollToSection('why-quantiq')}>Why QuantIQ</a></li>
          <li><a href="#analytics" onClick={() => scrollToSection('analytics')}>Analytics</a></li>
          <li><a href="#join-mission" onClick={() => scrollToSection('join-mission')}>Join Us</a></li>
        </ul>
      </nav>

      <div className={`header-actions ${isMenuOpen ? 'mobile-open' : ''}`}>
        <button className="join-btn">Join Us</button>
        <button className="demo-btn">Request Demo</button>
      </div>
    </header>
  );
};

export default Navbar;