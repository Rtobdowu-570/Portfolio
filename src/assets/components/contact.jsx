import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { IoOpenOutline } from 'react-icons/io5';

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleEmailClick = () => {
    window.location.href = 'mailto:gcah4451@gmail.com';
  };

  const socialLinks = [
    {
      id: 'github',
      name: 'GITHUB',
      url: 'https://github.com/Rtobdowu-570',
      icon: FaGithub
    },
    {
      id: 'portfolio',
      name: 'PORTFOLIO',
      url: 'https://x.com/AndrewPete38959',
      icon: IoOpenOutline
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <div className="contact-left">
          <div className="contact-heading">
            <span className="contact-label-num">03//</span>
            <span className="contact-label-title">CONTACT_</span>
          </div>
          <div className="contact-text">
            AVAILABLE FOR COLLABORATION,<br />
            DESTRUCTION, AND CREATION.
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-cta" onClick={handleEmailClick}>
            <span className="contact-cta-text">EMAIL ME</span>
            <span className="contact-cta-arrow">→</span>
          </div>
          <div className="contact-icons">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  className="contact-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIcon(link.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  title={link.name}
                >
                  <IconComponent size={28} />
                  {hoveredIcon === link.id && (
                    <span className="icon-tooltip">{link.name}</span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-line"></div>
        <div className="contact-meta">
          <span>© 2026 SLEEK // NULL // ALL RIGHTS RESERVED</span>
          <span>DESIGNED TO BE BROKEN</span>
          <span>■ SYSTEM_STATUS: NOMINAL</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
