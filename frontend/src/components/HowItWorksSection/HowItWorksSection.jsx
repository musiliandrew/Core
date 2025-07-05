import React from 'react';
import './HowItWorksSection.css';
import Flowchart from '../../assets/flowchart.avif'; // Your flowchart visual
import { useInView } from 'react-intersection-observer';

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="how-it-works-section" ref={ref}>
      <div className="section-content">
        <h2 className="section-title">
          <span className="gradient-text">From Data</span>
          <span className="gradient-text">to Impact</span>
        </h2>

        <div className={`process-flow ${inView ? 'animate' : ''}`}>
          <div className="flow-step">
            <div className="step-number">1</div>
            <h3 className="step-title">Connect</h3>
            <p className="step-description">
              Plug in your data or use QuantIQ's APIs (Analytics/Devs)
            </p>
            <div className="step-connector"></div>
          </div>

          <div className="flow-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Process</h3>
            <p className="step-description">
              AI and automation turn raw data into intelligent systems
            </p>
            <div className="step-connector"></div>
          </div>

          <div className="flow-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Act</h3>
            <p className="step-description">
              Get insights, build apps, or prototype innovations with ease
            </p>
          </div>

          <div className="flow-visual">
            <img src={Flowchart} alt="Data flow process" className="flowchart-image" />
          </div>
        </div>

        <div className="cta-container">
          <a href="/bookswaps" className="primary-cta">
            Try BookSwaps Now
          </a>
          <a href="/waitlist" className="secondary-cta">
            Join Analytics Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;