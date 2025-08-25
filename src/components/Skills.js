import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Java", "JavaScript", "Python", "C"]
    },
    {
      title: "Web Technologies",
      icon: <FaLaptopCode />,
      skills: ["HTML", "CSS", "React.js", "Spring Boot"]
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase />,
      skills: ["SQL", "MongoDB", "Oracle PL/SQL", "Git/GitHub"]
    },
    {
      title: "Development Tools",
      icon: <FaTools />,
      skills: ["VS Code", "IntelliJ", "Eclipse", "Postman"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Full Stack Development</h3>
            <p>MERN Stack, Spring Boot, and modern web technologies</p>
          </div>
          <div className="summary-card">
            <h3>Cloud & DevOps</h3>
            <p>Azure, AWS, CI/CD pipelines, and containerization</p>
          </div>
          <div className="summary-card">
            <h3>AI & Machine Learning</h3>
            <p>ML algorithms, data preprocessing, and model deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
