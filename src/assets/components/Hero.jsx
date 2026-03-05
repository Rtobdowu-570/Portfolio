import React, { useState, useEffect } from 'react';

const Hero = ({ mousePos }) => {
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setDisplayPos(mousePos);
  }, [mousePos]);

  return (
    <section className="hero">
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

      <div className="mouse-tracker">
        X: {String(Math.round(displayPos.x)).padStart(4, '0')} Y: {String(Math.round(displayPos.y)).padStart(3, '0')} // SLEEK_v4
      </div>
    </section>
  );
};

export default Hero;
