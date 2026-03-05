import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">[SLEEK//NULL]</div>
      <ul className="navbar-links">
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact" style={{ border: '4px solid #FF0000' }}>⅁</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
