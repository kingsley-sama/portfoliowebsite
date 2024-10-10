import { useParams, useNavigate } from 'react-router-dom';
import "./main.css"
import "../../App.css"
import gsap from 'gsap';
import { projects } from './details';
import CustomEase from 'gsap/CustomEase';
import ReactLenis from '@studio-freight/react-lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
gsap.registerPlugin(CustomEase, ScrollTrigger);
const ProjectDetails = () => {
  const { project_id } = useParams();
  const navigate = useNavigate();
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const kingsRef = useRef(null);
  const workRef = useRef(null);
  const containerRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const animateCounter = () => {
    const counterElement = counterRef.current;
    const kingsElement = kingsRef.current;
    const workElement = workRef.current;

    let currentValue = 0;
    const updateInterval = 30; // Faster updates for smoother animation
    const maxDuration = 500;
    const endValue = 100;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime < maxDuration) {
        currentValue = Math.min(
          Math.floor((elapsedTime / maxDuration) * endValue),
          endValue
        );
        if (counterElement) {
          counterElement.textContent = `${currentValue}%`;
        }
        requestAnimationFrame(updateCounter);
      } else {
        if (counterElement) {
          counterElement.textContent = `${endValue}%`;
        }
        setTimeout(() => {
          gsap.to(counterElement, {
            y: -50,
            duration: 1.6,
            ease: "power3.inOut",
            onStart: revealLandingPage,
          });
          gsap.to(kingsElement, {
            y: -65,
            duration: 1.2,
            ease: "power3.out",
          });
          gsap.to(workElement, {
            y: -95,
            duration: 0.6,
            ease: "power3.out",
          });
        }, 400);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const revealLandingPage = () => {
    CustomEase.create(
      "hop",
      "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
    );

    gsap.to(heroRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 2,
      ease: "hop",
      onStart: () => {
        gsap.to(heroRef.current, {
          transform: "translate(-50%, -50%) scale(1)",
          duration: 2,
          ease: "power3.inOut",
          delay: 0.25,
        });

        gsap.to(overlayRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "power3.inOut",
          delay: 0.4,
          onComplete: () => {
            setAnimationComplete(true);
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 0.4,
              onComplete: () => {
                if (containerRef.current) {
                  containerRef.current.style.display = 'none';
                }
              }
            });
          }
        });
      },
    });
  };

  useEffect(() => {
    // Start the counter animation after a short delay
    const timer = setTimeout(() => {
      animateCounter();
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const project = projects.find(p => p.id === project_id);

  const handleBack = () => {
    navigate(-1);
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div ref={containerRef} className="container">
        <div className="counter">
          <div>
            <p ref={workRef} className='work'>{project.title}</p>
            <h1 ref={kingsRef} className='kings'>{project.title}</h1>
          </div>
        </div>
        <section className="hero" ref={heroRef}>
          <div className="overlay" ref={overlayRef}></div>
        </section>
      </div>
      <div className="project-card_container">
        <div className="project-card">
          <div className="project-image">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} />
            )}
          </div>
          <div className="project-paragraph">
            <h1>{project.title}</h1>
            <h2>User Story:</h2>
            <div className="user-story">
              <p>{project.userStory}</p>
            </div>
            <div className="tech-stack">
              <p>{project.techStack}</p>
            </div>
            <div className="navigation">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view-button">View Website Live</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
