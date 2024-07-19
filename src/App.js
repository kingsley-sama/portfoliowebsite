import React, { useState } from 'react';
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

  return (
    <div className='App'>
      <Router >
        <Menue_Bar toggle={toggle} />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <div>
          <DownBar />
        </div>
      </Router>
    </div>
  );
}

export default App;

const Body = () => {
  const [page, setPage] = useState('home');
  function changePage(e) {
    setPage(e.currentTarget.dataset.page);

  }
  return (
    <div>
      <div className="parallax-image parallax-image-01" id='home'>
        <div className='contents'>
          <div>
            <div>
              <h1>Kingsley Francis <br /> Okpo</h1>
              <h3>Full Stack Web Developer <br /> & SE</h3>
              <button id='about'>About</button>
            </div>

          </div>
          <button
            className='explore-button'
            data-page='destination'
            onClick={changePage}
          >
            <span className='explore-button__text'>Explore</span>
          </button>
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
        <VideoPlayer videoId="jJPmhXbgqpo"/>
        
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
      <section id='tech_stacks'>
        <h2 className='projects_header'>Tech Stacks</h2>
        <HorizontalScroll direction="right" speed={0.09} />
        <HorizontalScroll direction="left" speed={0.06} />
      </section>
    </div>
  );
}

