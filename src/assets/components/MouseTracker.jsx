import React, { useState, useEffect } from 'react';

const MouseTracker = ({ mousePos, currentSection }) => {
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setDisplayPos(mousePos);
  }, [mousePos]);

  const isSectionWhiteBg = currentSection === 'about';

  return (
    <div className={`mouse-tracker ${isSectionWhiteBg ? 'tracker-white-bg' : 'tracker-black-bg'}`}>
      X: {String(Math.round(displayPos.x)).padStart(4, '0')} Y: {String(Math.round(displayPos.y)).padStart(3, '0')} // SLEEK_v4
    </div>
  );
};

export default MouseTracker;
