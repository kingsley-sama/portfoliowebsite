import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { Menue_Bar } from './nav/menue';
import { ProductCard } from './components/projects';
import ProjectItem from "./components/projects";
import DownBar from './root/bottom_bar';
import { TechStacks } from './components/Animations';
import AboutMe from './components/reviews/reviews';
import ArticleSample from './components/blogcard/bob';
import Services from './components/reviews';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import ReactLenis from '@studio-freight/react-lenis';
import ProjectDetails from './components/projects/main';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import NotFound from './404';
gsap.registerPlugin(CustomEase, ScrollTrigger);
export default function NeomaLandingPage() {
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const kingsRef = useRef(null);
  const workRef = useRef(null);
  const containerRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationDone, setAnimationDone] = useState(false);
  const animateCounter = () => {
    const counterElement = counterRef.current;
    const kingsElement = kingsRef.current;
    const workElement = workRef.current;
    let currentValue = 0;
    const updateInterval = 30;
    const maxDuration = 2000;
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
          sessionStorage.setItem('animationPlayed', 'true');
          gsap.to(counterElement, {
            y: -50,
            duration: 2,
            ease: "power3.inOut",
            onStart: revealLandingPage,
          });
          gsap.to(kingsElement, {
            y: -65,
            duration: 1.5,
            ease: "power3.out",
          });
          gsap.to(workElement, {
            y: -95,
            duration: 1,
            ease: "power3.out",
          });
        }, 1000);
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
          duration: 2.25,
          ease: "power3.inOut",
          delay: 0.25,
        });

        gsap.to(overlayRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 2,
          ease: "power3.inOut",
          delay: 0.5,
          onComplete: () => {
            setAnimationComplete(true);
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 0.5,
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
  useGSAP(() => {
    const hasPlayed = sessionStorage.getItem('animationPlayed');
    if (hasPlayed !== 'true') {
      setShowAnimation(true );
      
      animateCounter()
    } else {
      setShowAnimation(false);
      setAnimationComplete(true)
      animateCounter()
    }
  }, []);
  return (
    <ReactLenis root>
      <div className="scrollable-content">
        <div className='App'>
          <Router>
            <Routes>
              <Route path="/" element={
                <div>
                  {showAnimation ? (
                    <div ref={containerRef} className="container">
                      <div className="counter">
                        <div>
                          <p ref={workRef} className='work'>Web.Mobile.Dev</p>
                          <h1 ref={kingsRef} className='kings'>KINGSLEY.OKPO</h1>
                          <p className='counter-text' ref={counterRef}>0%</p>
                        </div>
                      </div>
                      <section className="hero" ref={heroRef}>
                        <div className="overlay" ref={overlayRef}></div>
                      </section>
                    </div>
                  ) : null}

                  {animationComplete ? (
                    <>
                      <Menue_Bar />
                      <DeveloperPage />
                      <div className='body-items-container'>
                        <ProjectsPage />
                        <AboutMe />
                        <Articles />
                        <Services />
                        <div className='article_wrapper'>
                          <ArticleSample />
                        </div>
                        <TechStacks />
                      </div>
                    </>
                  ) : (
                    <div className='loading-screen'>Loading Animation...</div>
                  )}
                </div>
              } />
              <Route path="/projects/:project_id" element={<ProjectDetails />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <DownBar />
          </Router>
        </div>
      </div>
    </ReactLenis>
  );
}
const DeveloperPage = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const elements = [
      titleRef.current,
      subtitleRef.current,
      imageRef.current
    ];
    // Set initial states
    gsap.set(elements, { x: -100, autoAlpha: 0 });
    const tl = gsap.timeline({
      delay: 0.8
    }
    );
    // Animate elements sequentially
    elements.forEach((element, index) => {
      tl.to(element, {
        x: 0,
        autoAlpha: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: index === 0 ? 0 : 0.5 // Small delay between elements
      }, index * 0.3); // Stagger the animations
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="developer-page">
      <div className="content" ref={contentRef}>
        <h1 id="web-mobile-h1" ref={titleRef}>
          <span className="left-align">Web & Mobile</span>
          <span className="right-align">DEVELOPER</span>
        </h1>
        <p ref={subtitleRef}>Full Stack Developer With 3<br />plus years of experience</p>
      </div>
      <div className="image-section" ref={imageRef}>
        <div className="image-overlay">
          <button id='hover_button'>Hover <br /> Here</button>
        </div>
      </div>

    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    ScrollTrigger.create({
      trigger: container,
      start: "top top", // When the container hits the center of the viewport
      onEnter: () => {
        gsap.to(container, {
          backgroundColor: '#d3d3d3', // Your desired background color
          duration: 1,
          ease: 'power2.inOut'
        });
      },
      onLeaveBack: () => {
        gsap.to(container, {
          backgroundColor: 'initial', // Or your original background color
          duration: 3,
          ease: 'power2.inOut'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="project-item-container">
      <h1 className='project-item-header'>Projects</h1>
      <div>
        <ProjectItem />
      </div>
    </div>
  );
};
const Articles = () => {
  return (
    <div className="project-item-container">
      <h1 className='project-item-header'>My Specializations</h1>
      <ProductCard />
    </div>
  );
};
