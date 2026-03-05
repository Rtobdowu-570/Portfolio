import React from 'react';

const Hero = ({ mousePos }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-version">
        VERSION_4.6.0<br />
        STABLE_BUILD
      </div>

      <div className="hero-content">
        <div className="hero-title">
          <div className="hero-title-white">SLEEK</div>
          <div className="hero-title-red">NULL</div>
        </div>

        <div className="hero-subtitle">
          "NOTHING MUCH"
        </div>

        <div className="hero-info-block">
          <div className="hero-divider"></div>
          <div className="hero-info-text">DEV / DESIGNER / NULL</div>
        </div>

        <div className="hero-status-block">
          <div className="hero-status-indicator">></div>
          <div className="hero-status">SYSTEM_READY_</div>
        </div>

        <div className="hero-description">
          SCROLL TO EXPLORE →
        </div>
      </div>
    </section>
  );
};

export default Hero;
