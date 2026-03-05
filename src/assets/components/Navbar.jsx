import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">[SLEEK//NULL]</div>
      <ul className="navbar-links">
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li>
          <a href="https://github.com/Rtobdowu-570" target="_blank" rel="noopener noreferrer" className="navbar-github">
            <FaGithub size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
