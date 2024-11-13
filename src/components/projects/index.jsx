"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./style.css"
// Sample array with 20 project information entries
const projectsData = [
  {
    number: '01',
    name: 'ECOMMERCE.COM',
    title: 'E-COMMERCE PLATFORM',
    description: 'SCALABLE ONLINE SHOPPING SOLUTION\nBUILT WITH NEXTJS, TYPESCRIPT,\nSTRIPE, MONGODB.',
    image: '/img/ecommerce_platform.png'
  },
  {
    number: '02',
    name: 'TASKMASTER.APP',
    title: 'PROJECT MANAGEMENT',
    description: 'COLLABORATIVE TASK TRACKING TOOL\nDEVELOPED USING REACT, REDUX,\nNODE.JS, POSTGRESQL.',
    image: '/img/project_management.png'
  },
  {
    number: '03',
    name: 'FITTRACK.IO',
    title: 'FITNESS TRACKER',
    description: 'PERSONALIZED WORKOUT PLANNER\nCREATED WITH REACT NATIVE,\nGRAPHQL, MONGODB.',
    image: '/img/fitness_tracker.png'
  },
  {
    number: '04',
    name: 'SMARTHOUSE.TECH',
    title: 'HOME AUTOMATION',
    description: 'IOT-BASED SMART HOME SOLUTION\nBUILT ON RASPBERRY PI, PYTHON,\nMQTT, REACT NATIVE.',
    image: '/img/home_automation.png'
  },
  {
    number: '05',
    name: 'LEARNLANG.EDU',
    title: 'LANGUAGE LEARNING',
    description: 'AI-POWERED LANGUAGE TUTOR\nDEVELOPED WITH PYTHON, TENSORFLOW,\nFLASK, VUE.JS.',
    image: '/img/language_learning.png'
  },

]

const ProjectItem = ({ project, index }) => {
  return (
    <div className="project-item-unique" id={`project-${index}`}>
      <div className="project-item-unique__header">
        <span className="project-item-unique__number">{project.number} | {project.name}</span>
        <div className="project-item-unique__icon"></div>
      </div>
      <div className="project-item-unique__content">
        <div className="project-item-unique__image" style={{backgroundImage: `url(${project.image})`}}></div>
        <div className="project-item-unique__details">
          <h2 className="project-item-unique__title">
            <div className="project-item-unique__icon"></div> {project.title}
          </h2>
          <p className="project-item-unique__description">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Component() {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    if (!container) return

    const projectItems = container.querySelectorAll('.project-item-unique')

    projectItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: '-=100px',
        endTrigger: container,
        end:'bottom +=500px',
        pin: true,
        pinSpacing: false,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <div className="projects-container"  ref={containerRef}>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </>
  )
}

// const ProductCard = ({ title, description, price, imageUrl }) => {
//   return (
//     <div className='grid'>
//       <div className='one'></div>
//       <div className='two'></div>
//       <div className='three'></div>
//       <div className='four'></div>
//     </div>
//   );
// };
const ProductCard = ({ title, description, price, imageUrl }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get the card element reference
    const card = cardRef.current;

    // Set up the GSAP animation
    gsap.fromTo(
      [card.querySelector('.one'), card.querySelector('.two'), card.querySelector('.three'), card.querySelector('.four')],
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="grid grid-cols-2 gap-4">
      <div className="one" ></div>
      <div className="two" ></div>
      <div className="three" ></div>
      <div className="four"></div>
    </div>
  );
};
export { ProductCard };
