import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
gsap.registerPlugin(ScrollTrigger);
const TechStacks = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const techLists = container.querySelectorAll('.tech-stack-list');
    
    // Set initial states
    gsap.set(techLists, { y: -60, opacity: 0 });
    techLists.forEach(list => {
      const listItems = list.querySelectorAll('.tech-stack-item');
      const heading = list.querySelector('.tech-stacks-subheading');
      gsap.set([heading, ...listItems], { y: -60, opacity: 0 });
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top 20%",
      onEnter: () => {
        // First animate the ULs
        gsap.to(techLists, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1, // Delay between each UL
          onComplete: () => {
            // Then animate the children of each UL
            techLists.forEach((list, index) => {
              const listItems = list.querySelectorAll('.tech-stack-item');
              const heading = list.querySelector('.tech-stacks-subheading');
              
              gsap.to(heading, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                delay: 0.1 // Small delay after UL animation
              });
              
              gsap.to(listItems, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
                delay: 0.2 // Delay after heading animation
              });
            });
          }
        });
      },
      onLeaveBack: () => {
        // Reverse animation when scrolling up
        techLists.forEach(list => {
          const listItems = list.querySelectorAll('.tech-stack-item');
          const heading = list.querySelector('.tech-stacks-subheading');
          
          gsap.to([heading, ...listItems], {
            y: -60,
            opacity: 0,
            duration: 1,
            ease: "power4.in"
          });
        });
        
        gsap.to(techLists, {
          y: -60,
          opacity: 0,
          duration: 1,
          ease: "power4.in",
          stagger: 0.1
        });
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <h2 className="tech-stacks-heading">Tech Stacks</h2>
      <div className="tech-stacks-wrapper">
        {/* Frontend/UI */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Frontend/UI</h3>
          <li className="tech-stack-item">React.js</li>
          <li className="tech-stack-item">TypeScript</li>
          <li className="tech-stack-item">CSS/Sass</li>
          <li className="tech-stack-item">Tailwind CSS</li>
          <li className="tech-stack-item">Framer Motion</li>
        </ul>
        {/* Backend */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Backend</h3>
          <li className="tech-stack-item">Node.js</li>
          <li className="tech-stack-item">Express.js</li>
          <li className="tech-stack-item">MongoDB</li>
          <li className="tech-stack-item">Flask</li>
          <li className="tech-stack-item">PostgreSQL</li>
        </ul>
        {/* Deployment */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Deployment</h3>
          <li className="tech-stack-item">Docker</li>
          <li className="tech-stack-item">Jenkins</li>
          <li className="tech-stack-item">Nginx</li>
          <li className="tech-stack-item">GitHub Actions</li>
          <li className="tech-stack-item">AWS</li>
        </ul>
        {/* System Design */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">System Design</h3>
          <li className="tech-stack-item">Microservices</li>
          <li className="tech-stack-item">REST APIs</li>
          <li className="tech-stack-item">GraphQL</li>
          <li className="tech-stack-item">Load Balancing</li>
          <li className="tech-stack-item">Event-Driven Architecture</li>
        </ul>
      </div>
    </div>
  );}
export {TechStacks};
