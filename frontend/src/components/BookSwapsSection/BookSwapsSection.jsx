// src/components/BookSwapsSection/BookSwapsSection.jsx
import React from 'react';
import './BookSwapsSection.css';
import BookSwapsLogo from '../../assets/bookswaps-logo.png';
import BookSwapsScreenshot from '../../assets/bookswaps-screenshot.png';
import { FaExchangeAlt, FaBookOpen, FaUsers, FaArrowRight } from 'react-icons/fa';

const BookSwapsSection = () => {
  return (
    <section className="bookswaps-section">
      <div className="section-content">
        <div className="product-header">
          <img src={BookSwapsLogo} alt="BookSwaps Logo" className="product-logo" />
          <h2 className="section-title">
            <span className="gradient-text">BookSwaps:</span>
            <span>Our First Step</span>
          </h2>
        </div>

        <div className="product-showcase">
          <div className="product-description">
            <p className="product-text">
              A decentralized, community-driven platform for readers to share, review, 
              and exchange books—powered by QuantIQ's intelligent systems.
            </p>
            
            <div className="product-stats">
              <div className="stat-item">
                <FaExchangeAlt className="stat-icon" />
                <span className="stat-number">500+</span>
                <span className="stat-label">books swapped</span>
              </div>
              <div className="stat-item">
                <FaBookOpen className="stat-icon" />
                <span className="stat-number">1K+</span>
                <span className="stat-label">titles available</span>
              </div>
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <span className="stat-number">300+</span>
                <span className="stat-label">active members</span>
              </div>
            </div>

            <blockquote className="testimonial">
              "BookSwaps made finding rare editions effortless - the AI recommendations are scarily accurate!"
              <cite>- Early Beta Tester</cite>
            </blockquote>
          </div>

          <div className="product-visual">
            <img 
              src={BookSwapsScreenshot} 
              alt="BookSwaps in action" 
              className="screenshot" 
            />
            <div className="screenshot-frame"></div>
          </div>
        </div>

        <a 
          href="https://bookswaps.quantiq.co.ke" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Explore BookSwaps <FaArrowRight className="cta-icon" />
        </a>
      </div>
    </section>
  );
};

export default BookSwapsSection;