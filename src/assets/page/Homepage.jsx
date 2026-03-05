import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/contact';
import Footer from '../components/footer';
import '../styles/main.css';

const Homepage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero mousePos={mousePos} />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
