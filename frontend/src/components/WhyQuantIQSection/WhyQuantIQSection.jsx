// src/components/WhyQuantIQSection/WhyQuantIQSection.jsx
import React from 'react';
import './WhyQuantIQSection.css';
import { FaRobot, FaLayerGroup, FaChartLine, FaTools, FaBusinessTime, FaAtom } from 'react-icons/fa';

const WhyQuantIQSection = () => {
  const features = [
    {
      icon: <FaRobot className="feature-icon" />,
      title: "AI-Core",
      description: "Built with intelligent automation from day one",
      accent: "#00FFFF"
    },
    {
      icon: <FaLayerGroup className="feature-icon" />,
      title: "Scalable",
      description: "Architecture that grows with your needs",
      accent: "#00BFFF"
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Scientific",
      description: "Math-driven insights powering decisions",
      accent: "#0099FF"
    },
    {
      icon: <FaTools className="feature-icon" />,
      title: "Developer-First",
      description: "Tools that accelerate intelligent development",
      accent: "#0077FF"
    },
    {
      icon: <FaBusinessTime className="feature-icon" />,
      title: "Accessible",
      description: "Enterprise tech for growing businesses",
      accent: "#0055FF"
    },
    {
      icon: <FaAtom className="feature-icon" />,
      title: "Innovative",
      description: "Pushing AI system boundaries",
      accent: "#0033FF"
    }
  ];

  return (
    <section className="why-quantiq-section">
      <div className="section-content">
        <h2 className="section-title">
          <span className="gradient-text">Why We're</span>
          <span className="gradient-text">Different</span>
        </h2>

        <div className="philosophy-grid">
          {features.map((feature, index) => (
            <div 
              className="philosophy-card" 
              key={index}
              style={{ '--accent-color': feature.accent }}
            >
              <div className="card-glow"></div>
              <div className="icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyQuantIQSection;