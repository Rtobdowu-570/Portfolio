import { FaGithub } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="navbar-brand" href="#hero" aria-label="Sleek Null home">[SLEEK//NULL]</a>
        <ul className="navbar-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li>
            <a
              href="https://github.com/Rtobdowu-570"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-github"
              aria-label="Open Null's GitHub profile"
            >
              <FaGithub aria-hidden="true" size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
