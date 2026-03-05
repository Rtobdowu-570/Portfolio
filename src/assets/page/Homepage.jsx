import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/contact';
import Footer from '../components/footer';
import MouseTracker from '../components/MouseTracker';
import '../styles/main.css';

const Homepage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero mousePos={mousePos} />
      <About />
      <Project />
      <Contact />
      <Footer />
      <MouseTracker mousePos={mousePos} currentSection={currentSection} />
    </div>
  );
};

export default Homepage;
