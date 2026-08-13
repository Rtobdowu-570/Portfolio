const technologies = ['REACT / VITE', 'JAVASCRIPT', 'TAILWIND CSS', 'POCKETBASE']

const About = () => {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-background-text" aria-hidden="true">NULL</div>

      <div className="about-left">
        <p className="section-index">01// ABOUT</p>
        <h2 id="about-title">Digital work with a point of view.</h2>
        <p className="about-text">
          I build digital artifacts at the intersection of useful functionality and unapologetic aesthetics. I care about responsive interfaces, thoughtful details, and code that stays understandable after the launch.
        </p>
        <p className="about-text about-text-muted">
          Based in Nigeria, currently open to frontend opportunities and collaborations.
        </p>
      </div>

      <div className="about-right">
        <p className="about-kicker">CURRENT TOOLKIT</p>
        <p className="about-quote">“Code is poetry, but the interface still has to work.”</p>
        <ul className="tech-stack" aria-label="Current technology stack">
          {technologies.map((technology) => (
            <li className="tech-item" key={technology}>
              <span className="tech-checkbox" aria-hidden="true">✓</span>
              <span>{technology}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
