import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/contact'
import Footer from '../components/footer'
import '../styles/main.css'

const Homepage = () => {
  return (
    <>
    <div className="portfolio-background">
    <Navbar />
    <About />
    <Project />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default Homepage