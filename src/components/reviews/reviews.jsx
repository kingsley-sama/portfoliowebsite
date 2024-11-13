import React, { useEffect, useRef } from 'react';
import "./reviews.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  // Create refs for the elements
  const imageContainerRef = useRef(null);
  const bottomOverlayRef = useRef(null);
  const topOverlayRef = useRef(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const bottomOverlay = bottomOverlayRef.current;
    const topOverlay = topOverlayRef.current;

    // Set initial styles
    gsap.set([bottomOverlay, topOverlay], { width: '100%', height: '50%' });

    // Create the GSAP animation
    gsap.to([bottomOverlay, topOverlay], {
      scrollTrigger: {
        trigger: imageContainer,
        start: 'top center',
        end: 'bottom 20%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
      width: '70px',
      height: '100px',
      duration: 10,
      delay: 1,
      ease: 'power2.out',
    });
  }, []); // Empty dependency array to run only once

  return (
    <div className='about-page'>
      <div>
        <h1>About Me</h1>
        <p>
          I'm Kingsley, a software engineer blending creativity and technical expertise to
          deliver impactful digital solutions. Each project is an opportunity to innovate and
          connect with users in meaningful ways. My approach is rooted in collaboration,
          ensuring that every idea comes to life with purpose. Let’s work together
          to create something extraordinary—where every line of code tells a story.
        </p>
      </div>
      <div ref={imageContainerRef} className='about-img'>
        <div ref={topOverlayRef} className='top-overlay'></div>
        <div ref={bottomOverlayRef} className="bottom-overlay"></div>
      </div>
    </div>
  );
};

export default AboutMe;
