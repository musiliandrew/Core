import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import PillarsSection from './components/PillarsSection';
import HowItWorksSection from './components/HowItWorksSection';
import BookSwapsSection from './components/BookSwapsSection';
import AnalyticsWaitlistSection from './components/AnalyticsWaitlistSection';
import WhyQuantIQSection from './components/WhyQuantIQSection';
import JoinMissionSection from './components/JoinMissionSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const particlesRef = useRef(null);
  const neuralRef = useRef(null);
  const streamsRef = useRef(null);
  const symbolsRef = useRef(null);
  const matrixRef = useRef(null);
  const quantumFieldRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile for performance optimization
    const isMobile = window.innerWidth <= 768;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Create floating particles
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      container.innerHTML = '';
      const particleCount = isMobile ? 25 : 50; // Reduce particles on mobile

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        container.appendChild(particle);
      }
    };

    // Create neural network
    const createNeuralNetwork = () => {
      const container = neuralRef.current;
      if (!container) return;

      container.innerHTML = '';
      const nodes = [];
      const nodeCount = isMobile ? 10 : 20; // Reduce nodes on mobile
      const connectionCount = isMobile ? 5 : 10; // Reduce connections on mobile

      for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(node);
        nodes.push(node);
      }

      for (let i = 0; i < connectionCount; i++) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        connection.style.left = Math.random() * 100 + '%';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.width = Math.random() * (isMobile ? 100 : 200) + 50 + 'px';
        connection.style.transform = `rotate(${Math.random() * 360}deg)`;
        connection.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(connection);
      }
    };

    // Create data streams
    const createDataStreams = () => {
      const container = streamsRef.current;
      if (!container) return;

      container.innerHTML = '';
      const streamCount = isMobile ? 8 : 15; // Reduce streams on mobile

      for (let i = 0; i < streamCount; i++) {
        const stream = document.createElement('div');
        stream.className = 'stream';
        stream.style.left = Math.random() * 100 + '%';
        stream.style.animationDelay = Math.random() * 4 + 's';
        stream.style.animationDuration = Math.random() * 2 + 3 + 's';
        container.appendChild(stream);
      }
    };

    // Create AI symbols
    const createAISymbols = () => {
      const container = symbolsRef.current;
      if (!container) return;

      container.innerHTML = '';
      const symbols = ['∆', '∇', '∑', '∏', '∫', '∂', '∞', '≈', '≠', '≤', '≥', '∀', '∃', '∈', '∉', '⊂', '⊃', '∪', '∩', '∧', '∨', '¬', '→', '←', '↑', '↓', '↔', '⇒', '⇔'];
      const symbolCount = isMobile ? 15 : 30; // Reduce symbols on mobile

      for (let i = 0; i < symbolCount; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.top = Math.random() * 100 + '%';
        symbol.style.animationDelay = Math.random() * 20 + 's';
        symbol.style.animationDuration = Math.random() * 10 + 15 + 's';
        container.appendChild(symbol);
      }
    };

    // Create matrix rain
    const createMatrixRain = () => {
      const container = matrixRef.current;
      if (!container) return;

      container.innerHTML = '';
      const chars = '01';
      const columnCount = isMobile ? 10 : 20; // Reduce columns on mobile
      const rowCount = isMobile ? 15 : 20; // Reduce rows on mobile

      for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDelay = Math.random() * 8 + 's';

        let text = '';
        for (let j = 0; j < rowCount; j++) {
          text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        container.appendChild(column);
      }
    };

    // Mouse interaction for quantum field
    const handleMouseMove = (e) => {
      if (!quantumFieldRef.current) return;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      quantumFieldRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(0, 255, 255, 0.2) 0%, transparent 70%)`;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize effects only if motion is not reduced
    if (!isReducedMotion) {
      createParticles();
      createNeuralNetwork();
      createDataStreams();
      createAISymbols();
      createMatrixRain();
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="cyber-grid"></div>
      <div className="quantum-field" ref={quantumFieldRef}></div>
      <div className="data-particles" ref={particlesRef}></div>
      <div className="neural-network" ref={neuralRef}></div>
      <div className="data-streams" ref={streamsRef}></div>
      <div className="ai-symbols" ref={symbolsRef}></div>
      <div className="matrix-rain" ref={matrixRef}></div>
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <HowItWorksSection />
      <BookSwapsSection />
      <AnalyticsWaitlistSection />
      <WhyQuantIQSection />
      <JoinMissionSection />
      <Footer />
    </div>
  );
}

export default App;