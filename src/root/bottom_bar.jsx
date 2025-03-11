import React, { useEffect, useRef, useState } from 'react';
import './bottom_bar.css';
import { North } from '@mui/icons-material';
const DownBar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName); // Set the hovered link
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredLink(null); // Remove the hover effect
  };
  // Links data
  const links = [
    { name: 'GitHub', href: 'https://github.com/kingsley-sama' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kingsley-okpo-13825b318' },
    { name: 'X', href: 'https://x.com/TechWithKing' },
    { name: 'Email', href: 'mailto:kngsley2018@gmail.com' },
    { name: 'TheRoom', href: '#' }
  ];
  return (
    <div className='main_footer'>
      <div className="lets-collaborate">
        <div className="collab-container">
          <h1 className="collab-heading">Let's<br />Collaborate</h1>
          <div className="collab-links">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={hoveredLink === link.name ? 'hovered' : ''}
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="circle">
          <North className="arrow" style={{ fontSize: '60px' }} />
          <span className="hire-me">Hire Me</span>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="logo">KINGSLEYOKPO.TECH</div>
          <div className="divider"></div>
          <div className="copyright">&copy;kingsleyokpo.tech</div>
        </div>
      </footer>
    </div>
  );
};

export default DownBar;
