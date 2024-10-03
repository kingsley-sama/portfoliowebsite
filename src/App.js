import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { Menue_Bar } from './nav/menue';
import { ProductCard } from './components/projects';
import ProjectItem from "./components/projects";
import DownBar from './root/bottom_bar';
import HorizontalScroll from './components/Animations';
import AboutMe from './components/reviews/reviews';
import AboutNe from './components/our_team';
import ArticleSample from './components/blogcard/bob';
import Services from './components/reviews';
import PreLoader from "./components/preloader";
import ProjectDetails from './components/projects/main';
function App() {
  const [toggle, setToggle] = useState(false);
  const [isDownBarInView, setDownBarInView] = useState(false);
  return (
    <div className='App'>
      <Router >
        <Routes>
          <Route path="/" element={<><Menue_Bar toggle={toggle} /><DeveloperPage /><ProjectsPage></ProjectsPage> <AboutMe /><Articles /><Services /><ArticleSample /><HorizontalScroll direction='right' speed={0.1}/><PreLoader /> </> } />
          < Route path="/preload" element={<PreLoader />} />
          <Route path="/project/:project_id" element={<ProjectDetails />} />
        </Routes>
        <DownBar />
      </Router>
      
    </div>
      )
}

export default App;


const DeveloperPage = () => {
  return (
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
  );
};

const ProjectsPage = ()=> {
  return (
    <div className="project-item-container">
      <h1 className='project-item-header'>Projects</h1>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
}
const Articles = ()=> {
  return (
    <div className="project-item-container">
      <h1 className='project-item-header'>Projects</h1>
      <ProductCard />
    </div>
  );
}
