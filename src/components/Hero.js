import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Master of Computer Application",
    "Full Stack Developer",
    "React.js Developer",
    "Java Developer",
    "Software Engineer",
    "Web Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Elakkiya D</span>
            </h1>
            <h2 className="hero-subtitle">
              {texts[currentText]}
            </h2>
            <p className="hero-description">
              Experienced software engineer with expertise in full-stack development, 
              cloud technologies, and modern frameworks. Committed to delivering 
              scalable solutions and driving innovation through code.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="hero-links">
              <a 
                href="https://github.com/Elakkiya-D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/elakkiya-d-171947256/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://leetcode.com/u/Elakkiya_D/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaCode />
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <FaCode />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
