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
          <li><a href='/#'> Home</a></li>
          <li><a href='/#projects'> Projects</a></li>
          <li>< a href='/#about' > About</a></li>
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
            <a className="sunnyside-unique-icon" href='https://github.com/kingsley-sama' ><GitHub className="sunnyside-unique-icon" /></a>
            <a className="sunnyside-unique-icon"  href='https://x.com/vallxe_sama'><Twitter /></a>
            <a className="sunnyside-unique-icon" href=''><LinkedIn  /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DownBar;
export { DownMenu };
