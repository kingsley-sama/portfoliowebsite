import { useParams, useNavigate } from 'react-router-dom';
import "./main.css"
import "../../App.css"
import gsap from 'gsap';
import { projectsData } from './details';
import CustomEase from 'gsap/CustomEase';
import ReactLenis from '@studio-freight/react-lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';
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
    const updateInterval = 30;
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

  useState(() => {
    const timer = setTimeout(() => {
      animateCounter();
      setAnimationComplete(true)
    }, 150);

    return () => clearTimeout(timer);
  }, []);
  const project = projectsData.find(p => p.id === project_id);
  const handleBack = () => {
    navigate(-1);
  };

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
        {project.imageUrl && (
          <div className="project-image" style={{backgroundImage :`url(${project.imageUrl})`}} />
          )}
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
              {project.Url ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view-button">View Website Live</button>
                </a>
              ):( <a
                href={project.GitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-button">View Github Repo</button>
              </a>)}
            </div>
          </div>
          {project.competitorAnalysis?
          <CompetitorAnalysis data={project.competitorAnalysis}/>:
          null
          }
          {project.problemDiscovery ? <ProblemDiscovery data={project.problemDiscovery}/>:
          null
          }
          {
            project.collaborators ? <ProjectCollaborators collaborators={project.collaborators}/> :
            null
          }
          
        </div>

      </div>
    </>
  );
};

export default ProjectDetails;

function CompetitorAnalysis({data}) {
  const competitors = data
  console.log(competitors)
  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        {/* Header Section */}
    <div className="header">
          <div className="category">RESEARCH</div>
          <h1 className="title">Competitor Analysis</h1>

          <p className="description">
            Although our <span className="highlight">app</span> is something that <span className="highlight">hasn't been done before</span>,
            we wanted to take a closer look at the <span className="highlight">companies</span> that have
            <span className="highlight"> attempted to enhance their in-person shopping experience</span>,
            whether through integrating coffee shops or juice bars within their retail space or by hosting engaging events, and
            <span className="highlight"> examine their levels of success or failure</span>.
          </p>
        </div>

        {/* Competitor Grid */}
        <div className="competitor-grid">
          {competitors.map((competitor) => (
            <div
              key={competitor.name}
              className="competitor-card"
            >
              <div className="image-container">
                <img
                  src={competitor.image}
                  alt={`${competitor.name} retail space`}
                  className="retail-image"
                />
              </div>
              <img
                src={competitor.logo}
                alt={`${competitor.name} logo`}
                className="company-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function ProblemDiscovery({data}) {
  return (
    <div className="ProblemDiscovery-container">
      <div className="ProblemDiscovery-content">
        <header className="ProblemDiscovery-header">
          <div className="ProblemDiscovery-category">RESEARCH</div>
          <h1 className="ProblemDiscovery-title">Initial Problem Discovery</h1>
          <div className="ProblemDiscovery-divider"></div>
        </header>

        <div className="ProblemDiscovery-textContent">
          <p>
            After <span className="ProblemDiscovery-highlight">COVID-19</span>, we observed a
            <span className="ProblemDiscovery-highlight"> notable shift</span> in people's desire for authentic, real-life connections. However, the available
            options for such <span className="ProblemDiscovery-highlight">interactions were found lacking</span>. Traditional spaces like co-working environments, coffee shops, gyms, and
            bars, while popular, often provided <span className="ProblemDiscovery-highlight">limited experiences</span> that felt somewhat
            <span className="ProblemDiscovery-highlight"> disconnected and independent</span>. Recognizing this
            social need for meaningful connections, we aimed to address these challenges specifically within <span className="ProblemDiscovery-highlight">brick-and-mortar</span> retail
            spaces.
          </p>
          <p>
            On the other hand, a significant challenge emerged within the realm of <span className="ProblemDiscovery-highlight">online shopping</span> experiences. Brands increasingly
            converted their physical stores into marketing channels to drive sales, engagement, and gather insights into customer
            preferences. However, a crucial gap existed in how these brands captured and analyzed in-store interactions. With a
            predominant focus on optimizing the online shopping journey, the <span className="ProblemDiscovery-highlight">real-life engagement</span> happening within physical stores often
            went <span className="ProblemDiscovery-highlight">unnoticed and underutilized</span>.
          </p>
        </div>

        <div className="ProblemDiscovery-imageGrid">
          <div className="ProblemDiscovery-imageContainer">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop"
              alt="Illustration of two people using laptops back to back"
              width={600}
              height={400}
              className="ProblemDiscovery-image"
            />
          </div>
          <div className="ProblemDiscovery-imageContainer">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop"
              alt="Illustration of hands interacting with analytics dashboard"
              width={600}
              height={400}
              className="ProblemDiscovery-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// ProjectCollaborators.jsx
function ProjectCollaborators({collaborators}){
  return (
    <div className="collaborators-container">
      <div className="collaborators-content">
        <h2 className="collaborators-title">Project Collaborators</h2>
        <div className="collaborators-divider"></div>

        <div className="collaborators-grid">
          {collaborators.map((collaborator) => {
            // Generate the avatar using DiceBear
            const avatar = createAvatar(identicon, {
              seed: collaborator.name,
            });

            return (
              <div key={collaborator.name} className="collaborator-card">
                <div className="collaborator-image-container">
               
                  <div
                    dangerouslySetInnerHTML={{ __html: avatar }}
                    className="collaborator-image"
                  />
                </div>
                <h3 className="collaborator-name">{collaborator.name}</h3>
                <p className="collaborator-role">{collaborator.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
   
}
