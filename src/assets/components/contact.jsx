import React, { useState } from 'react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';

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
      id: 'x',
      name: 'X',
      url: 'https://x.com/AndrewPete38959',
      icon: FaXTwitter
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-label">03//</div>
        <div className="contact-label">CONTACT</div>
        <div className="contact-text">
          AVAILABLE FOR COLLABORATION, DESTRUCTION, AND CREATION.
        </div>
        <div className="contact-line"></div>
        <div className="contact-meta">
          <span>© 2026 SLEEK // NULL // ALL RIGHTS RESERVED</span>
          <span>DESIGNED TO BE BROKEN</span>
          <span>■ SYSTEM_STATUS: NOMINAL</span>
        </div>
      </div>

      <div>
        <div className="contact-cta" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
          EMAIL ME →
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
                <IconComponent size={24} />
                {hoveredIcon === link.id && (
                  <span className="icon-tooltip">{link.name}</span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
