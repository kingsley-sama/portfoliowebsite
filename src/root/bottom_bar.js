import React, { useEffect, useRef } from 'react';
import './bottom_bar.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { FacebookSharp, GitHub, Twitter, LinkedIn, Instagram, ArrowDownward, ViewCarousel, ArrowDropUp, Email, YouTube, Message } from '@mui/icons-material';

const DownMenu = () => {
 
  return (
    <div className="container">
      <img
        src="https://as2.ftcdn.net/v2/jpg/04/88/01/65/1000_F_488016516_fzdbsfD5LpG2i7INwTFeScSDw6z3QtSK.jpg"
        alt="Background"
        className="background-image"
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
    <div className='downcomponent'  ref={containerRef}>
      <DownMenu />
      <div className='our_socials'>
        <div className='modals'>
          <div className='goto_top'>
            <ArrowUpwardIcon style={{ color: 'white', fontSize: '30px', margin: "5px" }} />
          </div>
        </div>
      </div>
      <div className='text'>
        <p>copyright: kingsleyokpo.tech 2024</p>
        <p>Email: kngsley2018@gmail.com
        </p>
        <p>This website was made responsively  with love
        </p>
      </div>
    </div>
  );
};

export default DownBar;
export { DownMenu };
