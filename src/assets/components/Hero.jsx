const Hero = () => {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-version" aria-label="Portfolio version">
        VERSION_4.6.0<br />
        STABLE_BUILD
      </div>

      <div className="hero-content">
        <p className="eyebrow">FRONTEND DEVELOPER / DIGITAL MAKER</p>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-title-white">SLEEK</span>
          <span className="hero-title-red">NULL</span>
        </h1>
        <p className="hero-subtitle">Nothing much. Just useful things for the web.</p>

        <div className="hero-info-block" aria-label="Current status">
          <span className="hero-divider" aria-hidden="true"></span>
          <span className="hero-info-text">REACT / JAVASCRIPT / UI</span>
        </div>

        <p className="hero-status-block">
          <span className="hero-status-indicator" aria-hidden="true">&gt;</span>
          <span className="hero-status">SYSTEM_READY_</span>
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
          <a className="button button-secondary" href="mailto:gcah4451@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Hero
