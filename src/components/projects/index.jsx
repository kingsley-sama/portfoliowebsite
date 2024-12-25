"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./style.css"
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
// Sample array with 20 project information entries
const projectsData = [
  {
    number: '01',
    name: 'sucasa',
    title: 'E-COMMERCE PLATFORM',
    description: 'SCALABLE ONLINE SHOPPING SOLUTION\nBUILT WITH NEXTJS, TYPESCRIPT,\nSTRIPE, MONGODB.',
    image: '/projects_images/sucasa.png'
  },
  {
    number: '02',
    name: 'simpleshell',
    title: 'PROJECT MANAGEMENT',
    description: 'COLLABORATIVE TASK TRACKING TOOL\nDEVELOPED USING REACT, REDUX,\nNODE.JS, POSTGRESQL.',
    image: '/projects_images/OrionShell.png'
  },
  {
    number: '03',
    name: 'oderasbm',
    title: 'FITNESS TRACKER',
    description: 'PERSONALIZED WORKOUT PLANNER\nCREATED WITH REACT NATIVE,\nGRAPHQL, MONGODB.',
    image: '/projects_images/Oderasbm.png'
  },
  {
    number: '04',
    name: 'odomiterentals',
    title: 'HOME AUTOMATION',
    description: 'IOT-BASED SMART HOME SOLUTION\nBUILT ON RASPBERRY PI, PYTHON,\nMQTT, REACT NATIVE.',
    image: '/projects_images/Odomiterentals.png'
  },
  {
    number: '05',
    name: 'classroom-by-delphi',
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
         <Link to={`/projects/${project.name}`} key={index}>
           <ProjectItem project={project} index={index} />
          </Link>
          ))}
      </div>
    </>
  )
}

const ProductCard = ({ title, description, price, imageUrl }) => {
  const card_data = [
    {
      id: "id",
      name: "name",
      description: "description",
      link: "link",
      image_url: "/img/steptodown.com504145.jpg",
      
      class_name: "one"
    },
    {
      id: "id",
      name: "name",
      description: "description",
      link: "link",
      image_url: "/img/front-end.png",
      class_name: "two"
    },
    {
      id: "id",
      name: "name",
      description: "description",
      link: "link",
      image_url: "/img/agile.jpg",
      class_name: "three"
    },
    {
      id: "id",
      name: "name",
      description: "description",
      link: "link",
      image_url: "img/steptodown.com641916.jpg",
      class_name: "four"
    },
  ]
  const cardRef = useRef(null);
  useGSAP(() => {
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
      {card_data.map( data => 
          <div className={data.class_name} style={{backgroundImage: `url(${data.image_url}) `}}></div>
      )}
    </div>
  );
};
export { ProductCard };
