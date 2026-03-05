import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { IoOpenOutline } from 'react-icons/io5';

const Project = () => {
  const [glitchingIndex, setGlitchingIndex] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'MOVIE EXPLORER',
      description: 'A modern movie discovery platform built to master React',
      technologies: ['CSS', 'REACT'],
      github: 'https://github.com/Rtobdowu-570',
      live: 'https://movie-explorer.example.com'
    },
    {
      id: '02',
      title: 'SENTIMENT',
      description: 'Vercel Prompt Hackathon',
      technologies: ['TYPESCRIPT'],
      featured: true,
      github: 'https://github.com/Rtobdowu-570',
      live: null
    },
    {
      id: '03',
      title: 'QUIZ-NOVA',
      description: 'Quiz app with 200+ questions, CRUD, timed challenges',
      technologies: ['JAVASCRIPT'],
      github: 'https://github.com/Rtobdowu-570',
      live: 'https://quiz-nova.example.com'
    },
    {
      id: '04',
      title: 'EXPENSE TRACKER',
      description: 'Track expenses in JSON and image format',
      technologies: ['JAVASCRIPT'],
      github: 'https://github.com/Rtobdowu-570',
      live: null
    },
    {
      id: '05',
      title: 'LUMINA',
      description: 'E-commerce app built with Pocketbase',
      technologies: ['TYPESCRIPT'],
      github: 'https://github.com/Rtobdowu-570',
      live: 'https://lumina.example.com'
    },
    {
      id: '06',
      title: 'QR CODE READER',
      description: 'Decode QR messages and convert text to QR codes',
      technologies: ['JAVASCRIPT'],
      github: 'https://github.com/Rtobdowu-570',
      live: null
    }
  ];

  const handleCardHover = (index) => {
    setGlitchingIndex(index);
  };

  const handleCardLeave = () => {
    setGlitchingIndex(null);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div className="projects-title">
          02//<br />WORKS <span style={{ color: '#FF0000' }}>■</span>
        </div>
        <div className="projects-meta">
          <span className="projects-meta-label">[46+ REPOSITORIES]</span>
          <span className="projects-meta-count">SELECTED ARTIFACTS ONLY</span>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={project.id}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="project-background-text">{project.title}</div>
            
            <div>
              <div className="project-index">{project.id}</div>
              <div className={`project-title ${project.featured ? 'project-title-red' : ''}`}>
                {project.title}
              </div>
              <div className="project-description">
                {project.description}
              </div>
            </div>

            <div>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <div className="project-tech-badge" key={idx}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className="project-icons">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                    <IoOpenOutline size={20} />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
