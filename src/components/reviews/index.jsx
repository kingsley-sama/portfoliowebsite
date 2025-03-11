import React, { useState, useRef, useEffect } from 'react';
import { PlayArrow, Close } from '@mui/icons-material';
import gsap from 'gsap';
import './style.css';

const Services = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoOverlayRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  const toggleVideo = () => setIsVideoOpen(!isVideoOpen);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut"
        }
      });
      
      tl.fromTo(videoOverlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      )
      .fromTo(videoContainerRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );

    } else {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut"
        },
        onComplete: () => {
          document.body.style.overflow = 'unset';
        }
      });
      
      tl.to(videoContainerRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.4,
      })
      .to(videoOverlayRef.current, {
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");
    }

    return () => {
      document.body.style.overflow = 'unset';
      gsap.killTweensOf([videoOverlayRef.current, videoContainerRef.current]);
    };
  }, [isVideoOpen]);

  const handleOverlayClick = (e) => {
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      toggleVideo();
    }
  };

  return (
    <div className='service-page'>
      <div className='service-content'>
        <h3>___ our growth journey </h3>
        <h1>User Centric Software Development</h1>
        <p>
          I strongly believe in human centered designs and I believe close interaction with the end user 
          is key to developing a successful product. Because we can see key painpoints and areas of improvement.
        </p>
      </div>
      <div className='service-img'>
        <div className='service-img_overlay'>
          <button onClick={toggleVideo}>
            <PlayArrow style={{color: "white", fontSize: "50px"}}/>
          </button>
        </div>
        {isVideoOpen && (
          <div 
            ref={videoOverlayRef}
            className="video-overlay"
            onClick={handleOverlayClick}
          >
            <div 
              ref={videoContainerRef}
              className="video-container"
            >
              <button 
                className="close-button"
                onClick={toggleVideo}
              >
                <Close style={{fontSize: "24px"}} />
              </button>
              <div ref={videoRef} className="video-player-wrapper">
                <iframe 
                  className="video-iframe"
                  src="https://www.youtube.com/embed/KkUor_NTuDA" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
