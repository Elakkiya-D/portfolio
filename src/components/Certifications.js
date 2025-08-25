import React from 'react';
import { FaCertificate, FaAward, FaGraduationCap, FaLaptopCode, FaCode, FaCloud, FaCogs, FaBrain, FaTools } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Machine Learning Certification",
      issuer: "Various Platforms",
      icon: <FaBrain />,
      image: "/images/certifications/ML.png",
      description: "Comprehensive machine learning course covering algorithms, data preprocessing, and model evaluation techniques.",
      category: "AI/ML",
      date: "2024"
    },
    {
      id: 2,
      title: "DevOps Fundamentals",
      issuer: "Various Platforms",
      icon: <FaCogs />,
      image: "/images/certifications/Devops.png",
      description: "DevOps practices including CI/CD pipelines, containerization, and infrastructure as code.",
      category: "DevOps",
      date: "2024"
    },
    {
      id: 3,
      title: "Microsoft Azure Fundamentals",
      issuer: "IntelliPat",
      icon: <FaCloud />,
      image: "/images/certifications/intellipatAzure.png",
      description: "Microsoft Azure cloud platform fundamentals covering services, security, and deployment.",
      category: "Cloud",
      date: "2024"
    },
    {
      id: 4,
      title: "Cloud Computing",
      issuer: "Various Platforms",
      icon: <FaCloud />,
      image: "/images/certifications/cloud.png",
      description: "Cloud computing concepts including virtualization, scalability, and service models.",
      category: "Cloud",
      date: "2024"
    },
    {
      id: 5,
      title: "Spring Framework",
      issuer: "Various Platforms",
      icon: <FaLaptopCode />,
      image: "/images/certifications/spring.png",
      description: "Spring Framework for Java development including Spring Boot, Spring MVC, and dependency injection.",
      category: "Programming",
      date: "2024"
    },
    {
      id: 6,
      title: "Python Programming",
      issuer: "Various Platforms",
      icon: <FaCode />,
      image: "/images/certifications/python.png",
      description: "Advanced Python programming including data structures, algorithms, and web development frameworks.",
      category: "Programming",
      date: "2024"
    },
    {
      id: 7,
      title: "IoT Foundation Course",
      issuer: "NASSCOM",
      icon: <FaGraduationCap />,
      image: "/images/certifications/iot-foundation.png",
      description: "Internet of Things fundamentals covering sensors, connectivity, and smart device development.",
      category: "Technology",
      date: "2023"
    },
    {
      id: 8,
      title: "GitHub Foundations",
      issuer: "GitHub",
      icon: <FaTools />,
      image: "/images/certifications/github-foundations.png",
      description: "GitHub platform fundamentals including repositories, collaboration, and version control best practices.",
      category: "Development Tools",
      date: "2024"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Programming':
        return '#667eea';
      case 'Technology':
        return '#764ba2';
      case 'AI/ML':
        return '#e74c3c';
      case 'DevOps':
        return '#f39c12';
      case 'Cloud':
        return '#3498db';
      case 'Development Tools':
        return '#9b59b6';
      default:
        return '#667eea';
    }
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications & Workshops</h2>
        
        <div className="certifications-grid">
          {certifications.map(certification => (
            <div key={certification.id} className="certification-card">
              <div className="certification-image">
                {certification.image ? (
                  <img 
                    src={certification.image} 
                    alt={`${certification.title} Certificate`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="certification-icon fallback"
                  style={{ 
                    backgroundColor: getCategoryColor(certification.category),
                    display: certification.image ? 'none' : 'flex'
                  }}
                >
                  {certification.icon}
                </div>
              </div>
              
              <div className="certification-content">
                <div className="certification-header">
                  <h3 className="certification-title">{certification.title}</h3>
                  <span className="certification-date">{certification.date}</span>
                </div>
                
                <div className="certification-issuer">
                  <FaCertificate className="issuer-icon" />
                  <span>{certification.issuer}</span>
                </div>
                
                <p className="certification-description">
                  {certification.description}
                </p>
                
                <div className="certification-category">
                  <span 
                    className="category-tag"
                    style={{ backgroundColor: getCategoryColor(certification.category) }}
                  >
                    {certification.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-summary">
          <div className="summary-content">
            <h3>Continuous Learning Journey</h3>
                         <p>
               Committed to professional excellence through continuous learning and skill development. 
               These industry-recognized certifications demonstrate expertise in cutting-edge technologies 
               and validate my ability to deliver enterprise-grade solutions. Each certification represents 
               practical knowledge that directly contributes to project success and team productivity.
             </p>
            
                           <div className="learning-stats">
                 <div className="stat-item">
                   <div className="stat-number">8+</div>
                   <div className="stat-label">Certifications</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-number">6</div>
                   <div className="stat-label">Technology Areas</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-number">2</div>
                   <div className="stat-label">Years of Learning</div>
                 </div>
               </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
