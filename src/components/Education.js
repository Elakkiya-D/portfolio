import React from 'react';
import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Application",
      institution: "Kongu Engineering College",
      location: "Erode, Tamilnadu",
      duration: "2024 - 2026",
      cgpa: "8.72",
      description: "Currently pursuing advanced studies in computer applications with focus on software development, algorithms, and modern technologies.",
      achievements: [
        "Specialized in Full Stack Development",
        "Advanced Database Management Systems",
        "Software Engineering Principles"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Application",
      institution: "Kamban College of Arts and Science",
      location: "Tiruvannamalai",
      duration: "2020 - 2023",
      cgpa: "8.9",
      description: "Completed undergraduate studies with strong foundation in computer science fundamentals and practical programming skills.",
      achievements: [
        "Core Computer Science Concepts",
        "Programming Fundamentals",
        "Database Design"
      ]
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((education, index) => (
            <div key={education.id} className="education-item">
              <div className="timeline-marker">
                <FaGraduationCap />
              </div>
              
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree-title">{education.degree}</h3>
                  <div className="cgpa-badge">
                    <FaTrophy />
                    <span>CGPA: {education.cgpa}</span>
                  </div>
                </div>
                
                <div className="institution-info">
                  <div className="info-row">
                    <FaMapMarkerAlt className="info-icon" />
                    <span className="institution-name">{education.institution}</span>
                  </div>
                  <div className="info-row">
                    <FaMapMarkerAlt className="info-icon" />
                    <span className="location">{education.location}</span>
                  </div>
                  <div className="info-row">
                    <FaCalendarAlt className="info-icon" />
                    <span className="duration">{education.duration}</span>
                  </div>
                </div>
                
                <p className="education-description">{education.description}</p>
                
                <div className="achievements">
                  <h4>Key Focus Areas:</h4>
                  <ul className="achievements-list">
                    {education.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

                 <div className="education-summary">
           <div className="summary-card">
             <h3>Academic Excellence</h3>
             <p>Consistently achieved high academic performance with CGPA above 8.5, demonstrating strong analytical and problem-solving abilities.</p>
           </div>
           <div className="summary-card">
             <h3>Research & Innovation</h3>
             <p>Active involvement in research projects and staying current with emerging technologies and industry best practices.</p>
           </div>
           <div className="summary-card">
             <h3>Leadership & Collaboration</h3>
             <p>Led team projects and collaborated with peers to deliver innovative solutions to complex technical challenges.</p>
           </div>
         </div>
      </div>
    </section>
  );
};

export default Education;
