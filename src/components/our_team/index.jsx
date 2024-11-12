import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutNe = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div ref={ref} className={`about-me ${inView && imageLoaded ? 'in-view' : ''}`}>
      <img
        ref={imageRef}
        src="/path/to/your/image.jpg"
        alt="About Me background"
        className="about-me__image"
        onLoad={() => setImageLoaded(true)}
      />
      <div className="about-me__overlay about-me__overlay--top"></div>
      <div className="about-me__overlay about-me__overlay--bottom"></div>
      <div className="about-me__content">
        <h2 className="about-me__title">About Me</h2>
      </div>
      <style jsx>{`
        .about-me {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .about-me__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-me__overlay {
          position: absolute;
          left: 0;
          right: 0;
          height: 50%;
          background-color: black;
          transition: height 1s ease-in-out;
        }

        .about-me__overlay--top {
          top: 0;
        }

        .about-me__overlay--bottom {
          bottom: 0;
        }

        .about-me.in-view .about-me__overlay {
          height: 8px;
        }

        .about-me__content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 10;
        }

        .about-me__title {
          color: white;
          font-size: 2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default AboutNe;
