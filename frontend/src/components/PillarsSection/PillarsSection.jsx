import React from 'react';
import './PillarsSection.css';
import CodeSnippet from '../../assets/code-snippet.jpg'; // Your visual assets
import DashboardMockup from '../../assets/dashboard-mockup.png';
import AIModel from '../../assets/ai-model.png';

const PillarsSection = () => {
  return (
    <section className="pillars-section">
      <div className="section-content">
        <h2 className="section-title">
          <span className="gradient-text">Three Pillars,</span>
          <span className="gradient-text">One Mission</span>
        </h2>

        <div className="pillars-container">
          {/* Devs Pillar */}
          <div className="pillar-card">
            <div className="pillar-visual">
              <img src={CodeSnippet} alt="Code snippet" className="visual-image" />
              <div className="visual-overlay"></div>
            </div>
            <div className="pillar-content">
              <h3 className="pillar-name">QuantIQ Devs</h3>
              <p className="pillar-description">
                Build smarter apps faster with scalable, AI-ready software engineering and orchestration tools.
              </p>
            </div>
          </div>

          {/* Analytics Pillar */}
          <div className="pillar-card">
            <div className="pillar-visual">
              <img src={DashboardMockup} alt="Dashboard mockup" className="visual-image" />
              <div className="visual-overlay"></div>
            </div>
            <div className="pillar-content">
              <h3 className="pillar-name">QuantIQ Analytics</h3>
              <p className="pillar-description">
                Plug in your data, get automated dashboards, alerts, and insights—tailored for SMEs, no PhD required.
              </p>
            </div>
          </div>

          {/* Labs Pillar */}
          <div className="pillar-card">
            <div className="pillar-visual">
              <img src={AIModel} alt="AI model" className="visual-image" />
              <div className="visual-overlay"></div>
            </div>
            <div className="pillar-content">
              <h3 className="pillar-name">QuantIQ Labs</h3>
              <p className="pillar-description">
                Where AI meets math and research becomes reality—experimental tools and next-gen architectures.
              </p>
            </div>
          </div>
        </div>

        <div className="mission-statement">
          <h4 className="mission-question">Will QuantiQ Be Long-Serving?</h4>
          <p className="mission-answer">
            <span className="highlight">Absolutely.</span> Why?
          </p>
          <div className="mission-reasons">
            <p>
              Because data, AI, and automation are not trends — they are the new infrastructure of intelligence.
            </p>
            <p>
              Every generation of software has followed this flow:<br />
              <span className="flow">Tools → Platforms → Systems → Cognitive Ecosystems</span>
            </p>
            <p>
              QuantiQ lives in that final stage. It's not just software. It's augmented thinking.
            </p>
            <p>
              As long as the world runs on:<br />
              <span className="highlight-items">Data • Decisions • Developers • Scientific tools</span><br />
              ...QuantiQ will have a role in it.
            </p>
          </div>
        </div>

        <button className="cta-pillars">
          See How It Works <span className="arrow">↓</span>
        </button>
      </div>
    </section>
  );
};

export default PillarsSection;