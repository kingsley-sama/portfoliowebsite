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
      <div className="parallax-image parallax-image-01">
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
        <h2>About Me</h2>
        <p>
          I am A software engineer, A Mathematics Major and and AI enthusiast with key interest in
          Building full scale softwares and embeding the ability to make decisions based on conclusion from
          Logical steps. I Love Number theory and how it finds practical application in encryption. This is and
          area I would love to research someday. I am also currently serving as a research intern at the center
          for research and development University Of Lagos. I am a co-founder at virtuallearn.com A startup aimed
          and bringing VR into Africa to aid with the deficit in quality of education . I my free time I am a basketballer,
          Guitarist and Jazz Music admirer. Below I have included some of my most interesting Projects.
          If you want to connect with me you can find my socials here. Feel free to tell me the most awesome thing
          about yourself I will listen ...
        </p>

        <TeamQC />
      </section>
      <div className="parallax-image parallax-image-02"></div>
      <section>
        <h2>My PortFolioProjects</h2>
        <Cards />

        {/* Repeat the content for each section */}
      </section>
      <div className="parallax-image parallax-image-03">
        <div className='our_services'>
          <h2>Articles</h2>
          <div>
            <ProductReview />
          </div>

        </div>
      </div>
      <section>
        <h2>Tech Stacks</h2>
        <HorizontalScroll direction="right" speed={0.09} />
        <HorizontalScroll direction="left" speed={0.06} />
      </section>
    </div>
  );
}
const AboutUs = ({ project_name, image, id, link }) => {
  return (
    <div className='about_us'>
      <h3>Effective</h3>
      <div className='line'><div></div></div>
      <RemoveRedEye style={{ fontSize: "70px", marginTop: "15px", marginBottom: "15px" }} />
      <p>Heloo world to my friends in the internet</p>
    </div>
  )
}

