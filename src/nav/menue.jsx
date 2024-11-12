import React, { useState, useRef, useEffect } from 'react'
import "./menue.css";
import { Link } from 'react-router-dom';

const Menue_Bar = () => {
  const [navbarActive, setNavbarActive] = useState(true);
  const container = useRef();

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const menue_items = [
    { link: '/', name: 'Home', classname: 'li', id: 1 },
    { link: '/articles', name: 'Articles', classname: 'li', id: 2 },
    { link: '/#projects', name: 'Projects', classname: 'li', id: 3 },
    { link: '/services', name: 'Services', classname: 'li', id: 4 },
    { link: '/about', name: 'About Me', classname: 'li', id: 5 },
  ];

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
        </div>
        <div className="menu-open">
        </div>
      </div>

      <div className="menu-overlay">
        
      </div>
    </div>

  );
};

export { Menue_Bar };
