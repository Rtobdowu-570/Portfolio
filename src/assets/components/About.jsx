import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <div className="about-label about-label-left">01//</div>
        <div className="about-label about-label-left">ABOUT</div>
        <div className="about-text">
          I BUILD DIGITAL ARTIFACTS THAT EXIST AT THE INTERSECTION OF RAW FUNCTIONALITY AND UNAPOLOGETIC AESTHETICS.<br /><br />
          BASED IN THE DIGITAL VOID. OBSESSED WITH PERFORMANCE, MINIMALISM, AND BREAKING THE GRID.
        </div>
      </div>

      <div className="about-right">
        <div className="about-quote">
          "CODE IS POETRY, BUT BRUTALISM IS THE TRUTH."
        </div>
        <div className="tech-stack">
          <div className="tech-item tech-item-right">
            <div className="tech-checkbox"></div>
            <span>REACT / VITE</span>
          </div>
          <div className="tech-item tech-item-right">
            <div className="tech-checkbox"></div>
            <span>TYPESCRIPT</span>
          </div>
          <div className="tech-item tech-item-right">
            <div className="tech-checkbox"></div>
            <span>TAILWIND CSS</span>
          </div>
          <div className="tech-item tech-item-right">
            <div className="tech-checkbox"></div>
            <span>POCKETBASE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
