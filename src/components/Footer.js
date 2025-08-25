import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Elakkiya D</h3>
            <p>Software Engineer & Full Stack Developer</p>
            <p>Committed to delivering innovative solutions through code</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/Elakkiya-D" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/elakkiya-d-171947256/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/Elakkiya_D/" target="_blank" rel="noopener noreferrer">
                <FaCode />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Elakkiya D. All rights reserved.</p>
          <p>Built with <FaHeart className="heart-icon" /> using React.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
