import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { Menue_Bar } from './nav/menue';
import { ProductCard } from './components/projects';
import ProjectItem from "./components/projects";
import DownBar from './root/bottom_bar';
function App() {
  const [toggle, setToggle] = useState(false);
  const [isDownBarInView, setDownBarInView] = useState(false);
  return (
    <div className='App'>
      <Router >
        <Menue_Bar toggle={toggle} />
        <Routes>
          <Route path="/" element={<><DeveloperPage /><ProjectsPage></ProjectsPage> <Articles /></>} />
        </Routes>
        <DownBar />
      </Router>
      
    </div>                                                                                                                                 )
}

export default App;


const DeveloperPage = () => {
  return (
     <div className="developer-page">
       <div className="content">
         <h1 id="web-mobile-h1">
           <span className="left-align">Web & Mobile</span>
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
