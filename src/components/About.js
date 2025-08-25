import React from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
                               <div className="about-card">
                     <h3>Professional Summary</h3>
                     <p>
                       Results-driven software engineer with a strong foundation in computer science and 
                       extensive experience in developing scalable web applications. Proven track record of 
                       delivering high-quality solutions using modern technologies and best practices. 
                       Passionate about continuous learning and staying current with industry trends.
                     </p>
                   </div>
            
            <div className="about-details">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <div>
                    <span className="info-label">Name:</span>
                    <span className="info-value">Elakkiya D</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <span className="info-label">Location:</span>
                    <span className="info-value">Erode, Tamilnadu, India</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <span className="info-label">Email:</span>
                    <span className="info-value">delakkiya2@gmail.com</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <span className="info-label">Phone:</span>
                    <span className="info-value">+91 6374821422</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <FaUser />
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
