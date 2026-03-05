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

        <div className="hero-meta">
          <div className="hero-meta-line"></div>
          <div className="hero-status">SYSTEM_READY</div>
        </div>

        <div className="hero-description">
          SCROLL TO EXPLORE →
        </div>
      </div>
    </section>
  );
};

export default Hero;
