import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/contact'
import Footer from '../components/footer'
import '../styles/main.css'

const Homepage = () => {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage
