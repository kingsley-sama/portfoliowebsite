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
      <style jsx>{`
        .projects-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }
        .project-item-unique {
          width: 90%;
          min-width: 250px;
          height: 200px;
          background-color: var(--bg-primary-color);
          color: white;
          background-color: #272727;
          position: relative;
          top: 0;
          padding: 0px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          margin-bottom: 30px;
        }
        .project-item-unique__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0px;
          padding-left: 10px;
          margin-bottom: 10px;
        }
        .project-item-unique__number {
          white-space: pre-wrap;
          word-wrap: break-word;
          word-break: break-word;
          font-style: normal;
          font-family: "Inter", sans-serif;
          font-weight: light;
          font-size: 14px;
          letter-spacing: 0em;
          line-height: 1.2;
          margin-top: 10px;
        }
        .project-item-unique__icon {
          width: 10px;
          height: 15px;
          margin-left: 0px;
          margin: 10px;
          border: 0.1px solid #dad3d3;
        }
        .project-item-unique__content {
          position: absolute;
          max-height: 60%;
          min-height: 150px;
          min-width: 100%;
          display: flex;
          gap: 20px;
          bottom: 0;
          margin: 0;
          padding-right: 10px;
        }
        .project-item-unique__image {
          flex: 1;
          width: 30%;
          overflow: hidden;
          min-height: 100%;
          border-radius: 5px;
          background-position: center;
          border-radius: 10px 10px 0px 0px;
        }
        .project-item-unique__image-overlay p {
          margin: 0;
          font-size: 12px;
        }
        .project-item-unique__details {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .project-item-unique__title {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin-bottom: 0px;
          justify-content: flex-start;
          width: 100%;
          color: #dad3d3;
        }
        .project-item-unique__description {
          font-size: 10px;
          color: #dad3d3;
          line-height: 1.2;
          font-style: normal;
          font-weight: normal;
          font-family: "Inter", sans-serif;
          width: 100%;
        }
        @media (min-width: 1025px) {
          .project-item-unique {
            width: 80%;
            min-width: 850px;
            min-height: 400px;
            position: relative;
            top: 0;
            border-radius: 10px;
            font-family: Arial, sans-serif;
            font-size: 20px;
          }
          .project-item-unique__number {
            white-space: pre-wrap;
            word-wrap: break-word;
            word-break: break-word;
            font-style: normal;
            font-family: "Inter", sans-serif;
            font-weight: light;
            font-size: 30px;
            letter-spacing: 0em;
            line-height: 1.2;
            margin-top: 10px;
          }
          .project-item-unique__icon {
            width: 20px;
            height: 30px;
            margin: 10px;
            border: 0.1px solid #dad3d3;
          }
          .project-item-unique__content {
            position: absolute;
            bottom: 0;
            min-height: 70%;
            min-width: 100%;
            display: flex;
            gap: 40px;
            margin: 0;
            padding: 0;
          }
          .project-item-unique__image-overlay p {
            margin: 0;
            font-size: 14px;
          }
          .project-item-unique__details {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .project-item-unique__title {
            display: flex;
            align-items: center;
            font-size: 30px;
            margin-bottom: 20px;
            justify-content: flex-start;
            width: 100%;
            color: #dad3d3;
          }
          .project-item-unique__description {
            font-size: 22px;
            color: #dad3d3;
            line-height: 1.5;
            white-space: pre-wrap;
            word-wrap: break-word;
            word-break: break-word;
            font-style: normal;
            font-weight: normal;
            font-family: "Inter", sans-serif;
          }
        }
        @media (min-width: 766px) and (max-width: 1024px) {
          .project-item-unique {
            width: 85%;
            max-height: 350px;
            min-height: 300px;
          }
          .project-item-unique__content {
            min-height: 220px;
            min-width: 100%;
            display: flex;
            gap: 30px;
            display: flex;
            justify-content: center;
          }
          .project-item-unique__description {
            font-size: 20px;
          }
        }
      `}</style>
      <div className="projects-container"  ref={containerRef}>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </>
  )
} 
const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className='grid'>
      <div className='one'></div>
      <div className='two'></div>
      <div className='three'></div>
      <div className='four'></div>
    </div>
  );
};

export { ProductCard };
