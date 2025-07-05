import React, { useState } from 'react';
import './AnalyticsWaitlistSection.css';
import DashboardMockup from '../../assets/analytics-dashboard.png';

const AnalyticsWaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically connect to your email service/API
    console.log('Submitted email:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="analytics-waitlist-section">
      <div className="section-content">
        <h2 className="section-title">
          <span className="gradient-text">QuantIQ Analytics:</span>
          <span>Insights for Everyone</span>
        </h2>

        <div className="waitlist-container">
          <div className="product-description">
            <p className="description-text">
              A SaaS platform delivering automated dashboards, predictive analytics, 
              and actionable insights for SMEs. Plug in your data, get results.
            </p>
            
            {submitted ? (
              <div className="success-message">
                <h3>Thank you!</h3>
                <p>You've been added to our waitlist. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="waitlist-form">
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="submit-button">
                    Join the Waitlist
                  </button>
                </div>
                <p className="form-note">
                  Be the first to access QuantIQ Analytics when we launch.
                </p>
              </form>
            )}

            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h4>Automated Dashboards</h4>
                <p>Real-time visualization of your key metrics</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔮</div>
                <h4>Predictive Analytics</h4>
                <p>AI-powered forecasts and trends</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h4>Actionable Insights</h4>
                <p>Clear recommendations, not just data</p>
              </div>
            </div>
          </div>

          <div className="product-visual">
            <img 
              src={DashboardMockup} 
              alt="QuantIQ Analytics dashboard preview" 
              className="dashboard-image"
            />
            <div className="visual-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsWaitlistSection;