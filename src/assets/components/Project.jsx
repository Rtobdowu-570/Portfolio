import { FaGithub } from 'react-icons/fa6'
import { IoOpenOutline } from 'react-icons/io5'

const projects = [
  {
    id: '01',
    title: 'MOVIE EXPLORER',
    description: 'A responsive movie and TV discovery app using React, Vite, and live TMDB data.',
    technologies: ['REACT', 'CSS', 'TMDB API'],
    github: 'https://github.com/Rtobdowu-570/Movie-Explorer',
    live: 'https://movie-explorer-seven-pi.vercel.app',
  },
  {
    id: '02',
    title: 'SENTINENT',
    description: 'An AI-powered outreach research application created for the Vercel Prompt Hackathon.',
    technologies: ['TYPESCRIPT', 'AI', 'NEXT.JS'],
    featured: true,
    github: 'https://github.com/Rtobdowu-570/Sentinent',
    live: 'https://sentinent-mu.vercel.app',
  },
  {
    id: '03',
    title: 'QUIZ-NOVA',
    description: 'A vanilla JavaScript quiz app with a broad question bank, timed challenges, and score feedback.',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    github: 'https://github.com/Rtobdowu-570/Quiz-Nova',
    live: 'https://quiz-nov.netlify.app/',
  },
  {
    id: '04',
    title: 'EXPENSE TRACKER',
    description: 'A simple expense tracker for recording expenses in JSON and image formats.',
    technologies: ['JAVASCRIPT', 'JSON', 'CSS'],
    github: 'https://github.com/Rtobdowu-570/expense-tracker',
    live: 'https://trackpense.netlify.app/',
  },
  {
    id: '05',
    title: 'LUMINA',
    description: 'An e-commerce interface built with HTML, CSS, and PocketBase.',
    technologies: ['HTML', 'CSS', 'POCKETBASE'],
    github: 'https://github.com/Rtobdowu-570/Lumina_',
    live: null,
  },
  {
    id: '06',
    title: 'QR CODE READER',
    description: 'A browser tool for decoding QR messages and converting text into QR codes.',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    github: 'https://github.com/Rtobdowu-570/Qr_Code_Reader',
    live: 'https://hash-reader.netlify.app',
  },
]

const Project = () => {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects-header">
        <div>
          <p className="section-index">02// WORKS</p>
          <h2 className="projects-title" id="projects-title">Selected artifacts<span className="red-mark" aria-hidden="true">■</span></h2>
        </div>
        <p className="projects-meta">A considered selection from Null’s public repositories.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card${project.featured ? ' project-card-featured' : ''}`} key={project.id}>
            <div className="project-background-text" aria-hidden="true">{project.title}</div>

            <div className="project-header">
              <span className="project-index">{project.id}</span>
              <div className="project-icons-top" aria-label={`${project.title} links`}>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label={`Open live site for ${project.title}`}>
                    <IoOpenOutline aria-hidden="true" size={20} />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label={`Open source code for ${project.title}`}>
                  <FaGithub aria-hidden="true" size={20} />
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3 className={`project-title${project.featured ? ' project-title-red' : ''}`}>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-footer">
              <ul className="project-tech" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <li className="project-tech-badge" key={technology}>{technology}</li>)}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project
