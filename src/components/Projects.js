import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaDatabase, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Food Ordering Platform",
      description: "Developed the front-end of a food ordering platform using React.js, ensuring a user-friendly and responsive interface. Designed and implemented features like restaurant listings, menu browsing, cart management, and order tracking. Integrated API calls for seamless data retrieval and state management for an optimized user experience.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript", "MERN Stack"],
      category: "fullstack",
      image: "food-ordering",
      github: "https://github.com/Elakkiya-D/Food-Crave",
      live: "https://food-ordering-demo.com"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Developed a dynamic and responsive e-commerce website using ReactJS for seamless user interaction. Designed the front-end with HTML and CSS to ensure an intuitive UI/UX. Implemented product listing, search, cart management, and checkout functionality. Integrated state management for efficient data handling and optimized performance.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
      category: "frontend",
      image: "ecommerce",
      github: "https://github.com/Elakkiya-D/Fashion-Ecommerce",
      
    },
    {
      id: 3,
      title: "BookHaven - Book Store",
      description: "Designed and developed the front-end of an online bookstore using React.js, ensuring a seamless and responsive user experience. Implemented features such as book browsing, search functionality, user authentication, and a shopping cart. Integrated API calls for dynamic content rendering and managed state efficiently for smooth navigation and performance.",
      technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "MERN Stack"],
      category: "fullstack",
      image: "bookstore",
      github: "https://github.com/Elakkiya-D/BookHaven",
      
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechnologyIcon = (tech) => {
    if (tech.includes('React')) return <FaReact />;
    if (tech.includes('MongoDB') || tech.includes('SQL')) return <FaDatabase />;
    return <FaCode />;
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  {getTechnologyIcon(project.technologies[0])}
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

                       <div className="projects-cta">
                 <p>Interested in exploring more of my technical implementations and solutions?</p>
                 <a
                   href="https://github.com/Elakkiya-D"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn btn-primary"
                 >
                   Explore Full Portfolio on GitHub
                 </a>
               </div>
      </div>
    </section>
  );
};

export default Projects;
