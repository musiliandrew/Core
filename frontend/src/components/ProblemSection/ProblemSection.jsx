import React from 'react';
import './ProblemSection.css';

const ProblemSection = () => {
  return (
    <section className="problem-section">
      {/* Maintains all background elements from hero */}
      <div className="section-content">
        <div className="tagline-container">
          <h2 className="section-tagline">
            <span className="gradient-text">Data is Everywhere.</span>
            <span className="gradient-text">Intelligence is Not.</span>
          </h2>
          <div className="tagline-decoration"></div>
        </div>

        <div className="problem-grid">
          {/* SME Card */}
          <div className="problem-card">
            <div className="card-header">
              <div className="card-icon">☑️</div>
              <h3 className="card-title">For Startups/SMEs</h3>
            </div>
            <blockquote className="card-quote">
              "I don't have a data team, but I need insights."
            </blockquote>
            <p className="card-solution">
              <span className="product-name">QuantiQ Analytics</span> solves this with auto dashboards + insight automation
            </p>
            <div className="card-underline"></div>
          </div>

          {/* Developer Card */}
          <div className="problem-card">
            <div className="card-header">
              <div className="card-icon">☑️</div>
              <h3 className="card-title">For Devs & Builders</h3>
            </div>
            <blockquote className="card-quote">
              "I want to build smart apps fast, but infra is a pain."
            </blockquote>
            <p className="card-solution">
              <span className="product-name">QuantiQ Dev</span> gives orchestration, scaffolds, and tools to build intelligent systems out of the box
            </p>
            <div className="card-underline"></div>
          </div>

          {/* Researcher Card */}
          <div className="problem-card">
            <div className="card-header">
              <div className="card-icon">☑️</div>
              <h3 className="card-title">For Researchers</h3>
            </div>
            <blockquote className="card-quote">
              "We experiment with models/tools, but there's no unified platform to productize it."
            </blockquote>
            <p className="card-solution">
              <span className="product-name">QuantiQ Labs</span> bridges research + tooling into deployable systems
            </p>
            <div className="card-underline"></div>
          </div>
        </div>

        <div className="mission-statement">
          <p className="mission-text">
            We're fixing the chaos of siloed data and bloated tools. 
            <span className="highlight"> QuantiQ is the platform that turns this chaos into clarity.</span>
          </p>
          <p className="mission-text">
            We build thinking systems — modular, AI-powered solutions that evolve with the user.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;