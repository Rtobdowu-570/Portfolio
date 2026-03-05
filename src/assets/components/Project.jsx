import React, { useState } from 'react';

const Project = () => {
  const [glitchingIndex, setGlitchingIndex] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'MOVIE EXPLORER',
      description: 'A modern movie discovery platform built to master React',
      technologies: ['CSS', 'REACT']
    },
    {
      id: '02',
      title: 'SENTIMENT',
      description: 'Vercel Prompt Hackathon',
      technologies: ['TYPESCRIPT'],
      featured: true
    },
    {
      id: '03',
      title: 'QUIZ-NOVA',
      description: 'Quiz app with 200+ questions, CRUD, timed challenges',
      technologies: ['JAVASCRIPT']
    },
    {
      id: '04',
      title: 'EXPENSE TRACKER',
      description: 'Track expenses in JSON and image format',
      technologies: ['JAVASCRIPT']
    },
    {
      id: '05',
      title: 'LUMINA',
      description: 'E-commerce app built with Pocketbase',
      technologies: ['TYPESCRIPT']
    },
    {
      id: '06',
      title: 'QR CODE READER',
      description: 'Decode QR messages and convert text to QR codes',
      technologies: ['JAVASCRIPT']
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
                <div className="project-icon">→</div>
                <div className="project-icon">⅁</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
