import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { Menue_Bar } from './nav/menue';
import { CustomEase } from 'gsap/CustomEase';
import { ProductCard } from './components/projects';
import ProjectItem from "./components/projects";
import DownBar from './root/bottom_bar';
import HorizontalScroll from './components/Animations';
import AboutMe from './components/reviews/reviews';
import AboutNe from './components/our_team';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import { ReactLenis } from '@studio-freight/react-lenis'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ArticleSample from './components/blogcard/bob';
import Services from './components/reviews';
import PreLoader from "./components/preloader";
import ProjectDetails from './components/projects/main';
gsap.registerPlugin(CustomEase);

export const NeomaLandingPage = () => {
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);

  const animateCounter = () => {
    const counterElement = counterRef.current;
    let currentValue = 0;
    const updateInterval = 300;
    const maxDuration = 2000;
    const endValue = 100;
    const startTime = Date.now();

    function updateCounter() {
      const elapsedTime = Date.now() - startTime;
      
      if (elapsedTime < maxDuration) {
        currentValue = Math.min(
          currentValue + Math.floor(Math.random() * 30) + 5,
          endValue
        );
        
        if (counterElement) {
          counterElement.textContent = currentValue;
        }
        setTimeout(updateCounter, updateInterval);
      } else {
        if (counterElement) {
          counterElement.textContent = currentValue;
        }
        
        setTimeout(() => {
          gsap.to(counterElement, {
            y: -20,
            duration: 1,
            ease: "power3.inOut",
            onStart: revealLandingPage,
          });
        }, 500);
      }
    }
    updateCounter();
  };

  const revealLandingPage = () => {
    // Create the custom "hop" ease
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
        });
      },
    });
  };

  useEffect(() => {
    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <p ref={counterRef}>0</p>
      </div>
      <section className="hero" ref={heroRef}>
        <div className="overlay" ref={overlayRef}></div>
        <nav>
          <div className="nav-col">
            <div className="nav-item">
              <p>Neoma</p>
            </div>
            <div className="nav-item">
              <p>digital studio</p>
            </div>
          </div>
          <div className="nav-col">
            <div className="nav-item">
              <a href="#">work</a>
              <a href="home">home</a>
              <a href="blog">blog</a>
            </div>
            <div className="nav-item">
              <a href="new">new</a>
              <a href="personal">personal</a>
              <a href="teal">teal</a>
            </div>
            <div className="nav-item">
              <p>Montreal</p>
            </div>
          </div>
        </nav>
        <div className="header">
          <h1>Neoma</h1>
        </div>
        <div className="hero-img">
          <img src="/api/placeholder/400/320" alt="hero-image" />
        </div>
      </section>
    </div>
  );
};


function App() {
  const counterRef = useRef<HTMLParagraphElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP, CustomEase)
    CustomEase.create(
      "hop",
      "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
    )

    const animateCounter = () => {
      let currentValue = 0
      const updateInterval = 300
      const maxDuration = 2000
      const endValue = 100
      const startTime = Date.now()

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime

        if (elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          )

          if (counterRef.current) {
            counterRef.current.textContent = currentValue.toString()
          }
          setTimeout(updateCounter, updateInterval)
        } else {
          if (counterRef.current) {
            counterRef.current.textContent = currentValue.toString()
          }

          setTimeout(() => {
            gsap.to(counterRef.current, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onStart: revealLandingPage,
            })
          }, 500)
        }
      }

      updateCounter()
    }

    const revealLandingPage = () => {
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
          })
        },
      })
    }

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    })

//    Cleanup function
    return () => {
      gsap.killTweensOf(counterRef.current)
      gsap.killTweensOf(heroRef.current)
    }
  }, [])
  const [toggle, setToggle] = useState(false);

  return (
    <ReactLenis root>
      <div className='App'>

        <div className='animation-overlay' id='overlay' >
          <PreLoader />
        </div>
        <Router >
          <Routes>
            <Route path="/" element={<div >
              <Menue_Bar toggle={toggle} />
               <DeveloperPage />
               <ProjectsPage />
              <AboutMe /><Articles />
              <Services /><ArticleSample />
              <HorizontalScroll direction='right' speed={0.1} /> </div>} />
            <Route path="/project/:project_id" element={<ProjectDetails />} />
          </Routes>
          <DownBar />
        </Router>
      </div>
    </ReactLenis>
  )
}

export default App;


const DeveloperPage = () => {
  return (
    <>
      <div className="developer-page">
        <div className="content">
          <h1 id="web-mobile-h1">
            <span className="left-align">Web & M<div className='circle_img'></div>bile</span>
            <span className="right-align">DEVELOPER</span>
          </h1>
          <p>Full Stack Developer With 3<br />plus years of experience</p>
        </div>
        <div className="image-section">
          <div className="image-overlay">
            <button id='hover_button'>Hover <br /> Here</button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectsPage = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.animate-on-scroll');

    elements.forEach(element => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, []);
  return (
    <div className="project-item-container">
      <h1 className='project-item-header'>Projects</h1>
      <div className="animate-on-scroll">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
const Articles = () => {
  return (
    <div className="project-item-container">
      <h1 className='project-item-header'>Projects</h1>
      <ProductCard />
    </div>
  );
}
function Component() {
  const counterRef = useRef < HTMLParagraphElement > (null)
  const heroRef = useRef < HTMLDivElement > (null)
  const overlayRef = useRef < HTMLDivElement > (null)

  useEffect(() => {
    gsap.registerPlugin(CustomEase)
    CustomEase.create(
      "hop",
      "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
    )

    const animateCounter = () => {
      let currentValue = 0
      const updateInterval = 300
      const maxDuration = 2000
      const endValue = 100
      const startTime = Date.now()

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime

        if (elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          )

          if (counterRef.current) {
            counterRef.current.textContent = currentValue.toString()
          }
          setTimeout(updateCounter, updateInterval)
        } else {
          if (counterRef.current) {
            counterRef.current.textContent = currentValue.toString()
          }

          setTimeout(() => {
            gsap.to(counterRef.current, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onStart: revealLandingPage,
            })
          }, 500)
        }
      }

      updateCounter()
    }

    const revealLandingPage = () => {
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
          })
        },
      })
    }

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    })

    // Cleanup function
    return () => {
      gsap.killTweensOf(counterRef.current)
      gsap.killTweensOf(heroRef.current)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white p-6">
      <div className="counter absolute left-1/2 top-1/2 h-10 w-20 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-center">
        <p ref={counterRef} className="text-white">
          0
        </p>
      </div>
      <div
        ref={heroRef}
        className="hero absolute left-1/2 top-1/2 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 scale-[0.7] flex-col items-center bg-yellow-300"
        style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
      >
        <div
          ref={overlayRef}
          className="overlay absolute left-0 top-0 h-screen w-screen bg-red-500"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}
        ></div>
        <nav className="z-10 flex w-full justify-between p-4">
          <div className="nav-col">
            <div className="nav-item">
              <p className="text-sm">Neoma</p>
            </div>
            <div className="nav-item">
              <p className="text-sm">digital studio</p>
            </div>
          </div>
          <div className="nav-col flex flex-col items-end">
            <div className="nav-item">
              <Link href="#" className="text-sm text-black hover:underline">
                word
              </Link>
              <Link href="home" className="ml-2 text-sm text-black hover:underline">
                home
              </Link>
              <Link href="blog" className="ml-2 text-sm text-black hover:underline">
                blog
              </Link>
            </div>
            <div className="nav-item">
              <Link href="new" className="text-sm text-black hover:underline">
                new
              </Link>
              <Link href="personal" className="ml-2 text-sm text-black hover:underline">
                personal
              </Link>
              <Link href="teal" className="ml-2 text-sm text-black hover:underline">
                teal
              </Link>
            </div>
            <div className="nav-item">
              <p className="text-sm">Montreal</p>
            </div>
          </div>
        </nav>
        <div className="header z-10 mt-8">
          <h1 className="text-4xl font-bold">Neoma</h1>
        </div>
        <div className="hero-img z-10 mt-8">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero-img"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
