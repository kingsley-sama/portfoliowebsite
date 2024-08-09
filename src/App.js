import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import DownBar, { DownMenu } from './root/bottom_bar';
import Header, { Menue_Bar } from './nav/menue';
import { HorizontalRule, Money, MoneyOutlined, RemoveRedEye } from '@mui/icons-material';
import Cards from './components/projects';
import Profile from './components/our_team';
import TeamQC from './components/our_team/slidder';
import HorizontalScroll from './components/Animations';
import ProductReview from './components/blogcard/bob';
import VideoPlayer from './components/movies/video';
function App() {

  const [toggle, setToggle] = useState(false);
  const [isDownBarInView, setDownBarInView] = useState(false);
  return (
    <div className='App'>
      <Router >
        <Menue_Bar toggle={toggle} />
        <Routes>
          <Route path="/" element={<Body isDownBarInView={isDownBarInView} />} />
        </Routes>
        <div>
          <DownBar setDownBarInView={setDownBarInView} />
        </div>
      </Router>
    </div>
  );
}

export default App;

const Body = ({ isDownBarInView }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      // Add or remove the 'in-view' class based on the state
      if (isDownBarInView) {
        containerRef.current.classList.add('in-view');
      } else {
        containerRef.current.classList.remove('in-view');
      }
    }
    const handleScroll = () => {
      if (containerRef.current) {
        if (containerRef.current.classList.contains('in-view')) {
          containerRef.current.style.animationPlayState = 'running';
        } else {
          containerRef.current.style.animationPlayState = 'paused';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDownBarInView]);
  return (
    <div>
      <div className="parallax-image parallax-image-01" id='home'>
        <div className='contents'>
          <div>
            <div>
              <h1>Kingsley Francis Okpo</h1>
              <h3>Full Stack Web Developer</h3>
              <button id='about'>About</button>
            </div>

          </div>
        </div>
      </div>
      <section id='about-us'>
        <div class="text-container" >
          <h1>Personalizing Performance-Developing What Helps</h1>
          <p>
            I am A software engineer, A Mathematics Major and and AI enthusiast with key interest in
            Building full scale softwares and embeding the ability to make decisions based on conclusion from
            Logical steps. I Love Number theory and how it finds practical application in encryption. This is and
            area I would love to research someday.
            If you want to connect with me you can find my socials here. Feel free to tell me the most awesome thing
            about yourself I will listen ...
          </p>
          <p class="learnmore1">LEARN MORE</p>
        </div>
        <div id='about_image'><TeamQC /></div>

      </section >
      <div id='elevatior' className="videoplayer">
        <VideoPlayer videoId="jJPmhXbgqpo" />

      </div>
      <section id='projects'>
        <h2 className='projects_header'>Projects</h2>
        <Cards />
        {/* Repeat the content for each section */}
      </section>
      <div id='articles' className="parallax-image parallax-image-03">
        <div className='our_services'>
          <h1>Articles</h1>
          <div className='articles_page'>
            <ProductReview />
            <ProductReview />
            <ProductReview />
          </div>

        </div>
      </div>
      <section id="tech_stacks" className='tech_stacks' ref={containerRef}>
        <h2 className='projects_header'>Tech Stacks</h2>
        <HorizontalScroll direction="right" speed={0.09} />
        <HorizontalScroll direction="left" speed={0.06} />
      </section>
    </div>
  );
}

