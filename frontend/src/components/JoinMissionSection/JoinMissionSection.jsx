import React, { useState } from 'react';
import './JoinMissionSection.css';
import QuantIQLogo from '../../assets/logo.png'; // Your logo asset

const JoinMissionSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      message: ''
    });
  };

  return (
    <section className="join-mission-section" id="join-mission">
      <div className="section-content">
        <div className="title-container">
          <h2 className="section-title">
            <span className="gradient-text">Are You Delusional Enough</span>
            <span className="gradient-text">to Build the Future?</span>
          </h2>
          <div className="logo-pulse">
            <img src={QuantIQLogo} alt="QuantIQ Logo" className="mission-logo" />
          </div>
        </div>

        <div className="mission-content">
          <div className="mission-statement">
            <p className="call-to-action">
              We're recruiting believers—engineers, scientists, and dreamers who want to build systems that think.
            </p>
            
            <div className="roles-grid">
              <div className="role-card">
                <h3>Frontend Developers</h3>
                <p>Build interfaces for intelligent systems</p>
              </div>
              <div className="role-card">
                <h3>Backend Engineers</h3>
                <p>Architect scalable AI infrastructure</p>
              </div>
              <div className="role-card">
                <h3>Data/AI Engineers</h3>
                <p>Create thinking algorithms</p>
              </div>
              <div className="role-card">
                <h3>Design Thinkers</h3>
                <p>Shape human-AI interactions</p>
              </div>
              <div className="role-card">
                <h3>Product Designers</h3>
                <p>Craft the future of intelligent tools</p>
              </div>
              <div className="role-card">
                <h3>Product Managers</h3>
                <p>Guide our vision to reality</p>
              </div>
            </div>

            <div className="benefits">
              <h3 className="benefits-title">Why Join?</h3>
              <ul className="benefits-list">
                <li>Equity in a visionary company</li>
                <li>Real traction (BookSwaps live, Analytics coming)</li>
                <li>Chance to shape the future of intelligent systems</li>
                <li>Work with cutting-edge AI technologies</li>
                <li>Be part of a mission-driven team</li>
              </ul>
            </div>
          </div>

          <div className="join-form-container">
            <form onSubmit={handleSubmit} className="join-form">
              <h3 className="form-title">Apply Now</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Engineer">Backend Engineer</option>
                  <option value="Data/AI Engineer">Data/AI Engineer</option>
                  <option value="Design Thinker">Design Thinker</option>
                  <option value="Product Designer">Product Designer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Why you want to join the mission"
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Submit Application
              </button>
            </form>

            <div className="contact-option">
              <p>Prefer to email directly?</p>
              <a 
                href="mailto:musiliofficialandrew@gmail.com" 
                className="contact-button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMissionSection;