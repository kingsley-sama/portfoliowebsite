import React, { useState, useRef, useEffect } from 'react'
import "./menue.css";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
const Menue_Bar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const container = useRef();
  const tl = useRef();
  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };
  const menuLinks = [
    { link: '/', name: 'Home', classname: 'li', id: 1 },
    { link: '/articles', name: 'Articles', classname: 'li', id: 2 },
    { link: '/#projects', name: 'Projects', classname: 'li', id: 3 },
    { link: '/services', name: 'Services', classname: 'li', id: 4 },
    { link: '/about', name: 'About Me', classname: 'li', id: 5 },
  ];

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, { scope: container });
  useEffect(() => {
    if (navbarActive) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [navbarActive]);
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar menu-bar-txt">
        <div className="menu-logo">
          <Link>Kingsley</Link>
        </div>
        <div className="menu-open" onClick={toggleNavbar}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className='menu-logo'>
            <Link className='kingsley'>Kinsgley</Link>
            <div className="menu-close-icon" onClick={toggleNavbar}>
              <p>&#x2715;</p>
            </div>
          </div>
        </div>
        <div className="menu-copy">
          <div className='menu-links'>
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleNavbar}>
                  <Link href={link.link} className="menu-link">
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Figma</a>
            </div>

            <div className="menu-info-col">
              <p>info@codegrid.com</p>
              <p>2342 232 343</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>view portfolio here</p>
        </div>
      </div>
    </div>

  );
};

export { Menue_Bar };
