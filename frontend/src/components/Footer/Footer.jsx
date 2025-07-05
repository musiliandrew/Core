import React from 'react';
import './Footer.css';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="links-column">
            <h4 className="column-title">Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4 className="column-title">Products</h4>
            <ul>
              <li><a href="#bookswaps">BookSwaps</a></li>
              <li><a href="#analytics">QuantIQ Analytics</a></li>
              <li><a href="#devtools">Dev Tools</a></li>
              <li><a href="#research">Research</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4 className="column-title">Connect</h4>
            <div className="social-links">
              <a href="https://twitter.com/QuantIQ" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
                <span>@QuantIQ</span>
              </a>
              <a href="https://github.com/quant-iq" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/company/quant-iq" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © 2025 QuantIQ. All rights reserved.
          </div>
          
          <div className="branding">
            <span className="gradient-text">Built by QuantIQ Dev Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;