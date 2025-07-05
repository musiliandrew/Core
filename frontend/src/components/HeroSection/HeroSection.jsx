import React from 'react';
import './HeroSection.css';
import AImind from '../../assets/logoAI.png';


const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">

      <div className="main-container">
        <div className="visual-container">
          <div className="neural-core"></div>
          <div className="data-hexagon"></div>
          <div className="orbit-ring">
            <div className="orbit-dot"></div>
          </div>
          <div className="data-nodes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="node"></div>
            ))}
          </div>
          <div className="holographic-ring"></div>
          <div className="scanner-line"></div>
          <img src={AImind} alt="AI Mind Visualization" className="ai-visual" />
        </div>

        <div className="content-container">
          <h1 className="headline">Build the Future with Systems That Think</h1>
          <p className="subheadline">
            QuantIQ delivers AI-powered analytics, developer tools, and research innovation to transform data into real-world solutions for SMEs, builders, and visionaries.
          </p>
          <button className="cta-button">Join the Team</button>
        </div>
      </div>

      <div className="tech-corner"></div>
      <div className="bottom-tech"></div>
    </section>
  );
};

export default HeroSection;