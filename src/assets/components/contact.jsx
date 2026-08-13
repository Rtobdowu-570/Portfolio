import { createElement } from 'react'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  {
    id: 'github',
    name: 'GITHUB',
    url: 'https://github.com/Rtobdowu-570',
    icon: FaGithub,
  },
  {
    id: 'x',
    name: 'X',
    url: 'https://x.com/AndrewPete38959',
    icon: FaXTwitter,
  },
]

const Contact = () => {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-top">
        <div className="contact-left">
          <p className="section-index">03// CONTACT</p>
          <h2 className="contact-label-title" id="contact-title">Have a useful idea?</h2>
          <p className="contact-text">Available for frontend opportunities, collaborations, and experiments that deserve a good interface.</p>
        </div>

        <div className="contact-right">
          <a className="contact-cta" href="mailto:gcah4451@gmail.com">
            <span className="contact-cta-text">EMAIL ME</span>
            <span className="contact-cta-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="contact-icons">
            {socialLinks.map(({ id, name, url, icon: SocialIcon }) => (
              <a key={id} href={url} className="contact-icon" target="_blank" rel="noopener noreferrer" aria-label={`Open ${name}`}>
                {createElement(SocialIcon, { 'aria-hidden': true, size: 24 })}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-line" aria-hidden="true"></div>
        <div className="contact-meta">
          <span>© {new Date().getFullYear()} SLEEK // NULL</span>
          <span>DESIGNED TO BE USEFUL</span>
          <span><span className="status-dot" aria-hidden="true">■</span> SYSTEM_STATUS: NOMINAL</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
