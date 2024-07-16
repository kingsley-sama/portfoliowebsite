import React, { useEffect, useRef } from 'react';
import './bottom_bar.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import {Pinterest, GitHub, Facebook, LinkedIn, Instagram, ArrowDownward, ViewCarousel, ArrowDropUp, Email,Message, Twitter } from '@mui/icons-material';

const DownMenu = () => {

  return (
    <div className="container_downbar">
      <img
        src="/assets/20240711135509__MG_8632.JPG (1).jpg"
        alt="Background"
        className="bottom_background-image"
      />
      <div className="overlay">
        <ul className="menu-options">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const DownBar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add('in-view');
        } else {
          containerRef.current.classList.remove('in-view');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleScroll = () => {
      if (containerRef.current) {
        if (containerRef.current.classList.contains('in-view')) {
          containerRef.current.style.animationPlayState = 'running';
        } else {
          containerRef.current.style.animationPlayState = 'paused';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='downcomponent' ref={containerRef}>
      <DownMenu />
        <div className='modals'>
          <div className='goto_top'>
            <ArrowUpwardIcon style={{ color: 'white', fontSize: '30px', margin: "5px" }} />
          </div>
        </div>
      <footer className="sunnyside-unique-footer">
        <div className="sunnyside-unique-footer-content">
          <h2 className="sunnyside-unique-footer-title">kngsley2018@gmail.com</h2>
          <div className="sunnyside-unique-social-icons">
            <Facebook className="sunnyside-unique-icon" />
            <Instagram className="sunnyside-unique-icon" />
            <Twitter className="sunnyside-unique-icon" />
            <Pinterest className="sunnyside-unique-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DownBar;
export { DownMenu };
