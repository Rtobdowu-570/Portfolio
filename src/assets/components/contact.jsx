import React from 'react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:gcah4451@gmail.com';
  };

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
          <a href="https://github.com/Rtobdowu-570" className="contact-icon" target="_blank" rel="noopener noreferrer">
            GH
          </a>
          <a href="https://x.com/AndrewPete38959" className="contact-icon" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
