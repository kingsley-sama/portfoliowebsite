import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const HorizontalScroll = ({ direction = 'right', speed = 0.1 }) => {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    let animationFrameId;

    const startScrolling = () => {
      if (!isHovering) {
        if (direction === 'right') {
          scrollAmount += speed;
          if (scrollAmount >= 50) {
            scrollAmount = 0;
          }
        } else {
          scrollAmount -= speed;
          if (scrollAmount <= -50) {
            scrollAmount = 0;
          }
        }
        scrollContainer.style.transform = `translate3d(${-scrollAmount}%, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(startScrolling);
    };

    startScrolling();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, speed, isHovering]);

  // Image data array containing all images
  const imageData = [
    { src: "/img/pythonista.jpeg", alt: "python" },
    { src: "/img/morereact.png", alt: "react" },
    { src: "/img/cforweb.png", alt: "c" },
    { src: "/img/git.png", alt: "git" },
    { src: "/img/noded.png", alt: "node" },
    { src: "/img/django.png", alt: "django" },
    { src: "/img/emacsy.png", alt: "lisp" },
    { src: "/img/sql.png", alt: "sql" },
    { src: "/img/puppet.jpg", alt: "puppet" },
    { src: "/img/nginx.png", alt: "nginx" },
    { src: "/img/pytho_flask.png", alt: "flask" },
    { src: "/img/atlacian.png", alt: "atlacian" },
    { src: "/img/slack.jpg", alt: "slack" },
    { src: "/img/discord.jpeg", alt: "discord" },
  ];

  // Double the image array to create a seamless loop
  const doubledImageData = [...imageData, ...imageData];

  return (
    <div 
      className="scroll-container" 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={scrollContainerRef} className="scroll-content">
        <div className="header78_image-list">
          {doubledImageData.map((image, index) => (
            <div key={index} className="header78_image-wrapper">
              <img src={image.src} alt={image.alt} className="header78_image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
