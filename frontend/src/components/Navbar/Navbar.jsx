import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="QuantIQ Logo" className="company-logo" />
        <span className="company-name">QuantIQ</span>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><a href="#pillars">Solutions</a></li>
          <li><a href="#how-it-works">Technology</a></li>
          <li><a href="#why-quantiq">Research</a></li>
          <li><a href="#book-swaps">About</a></li>
          <li><a href="#join-mission">Contact</a></li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="join-btn">Join Us</button>
        <button className="demo-btn">Request Demo</button>
      </div>
    </header>
  );
};

export default Navbar;