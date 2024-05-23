import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"
import DownBar, { DownMenu } from './root/bottom_bar';
import Header, { Menue_Bar } from './nav/menue';
import { HorizontalRule, Money, MoneyOutlined, RemoveRedEye } from '@mui/icons-material';
import Cards from './components/projects';
import Profile from './components/our_team';
import TeamQC from './components/our_team/slidder';
import HorizontalScroll from './components/Animations';
function App() {

    const [toggle, setToggle] = useState(false);
    return (
      <div className='App'>
        <Router >
          <Menue_Bar />
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

const Body = () =>
 {
  return (
    <div>
      <div className="parallax-image parallax-image-01">
        <div className='contents'>
          <div>
            <div>
              <h1>Kingsley Francis <br /> Okpo</h1>
              <h3>Full Stack Web Developer <br /> & SE</h3>
              <button>About</button>
            </div>
          </div>
        </div>
      </div>
      <section id='about-us'>
        <h2>About Me</h2>
        <p> 
          In the academic realm, I navigate the complexities of mathematics, wielding logic with precision. Beyond academia, I am a full-stack software engineer fluent in Linux, adept at server setups, configurations, and domain management. From abstract theories to practical solutions, I seamlessly transition between worlds. With expertise in mathematics and software, I architect scalable systems and deploy projects with finesse. My proficiency extends to crafting elegant code and orchestrating the symphony of server management. I am both the mathematician unraveling equations and the engineer optimizing algorithms. In this fusion of disciplines, I am a master of my craft, ensuring every aspect of a project is finely tuned for success. With an unwavering dedication to excellence,
          I stand ready to tackle challenges in both academia and technology, bridging the gap between
        theory and practice with expertise and precision.</p>
       
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
      <h2>Our Portfolio</h2>
		  <div>
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
			<AboutUs />
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
const AboutUs = ({project_name, image, id, link})=>{
  return(
	<div className='about_us'>
	  <h3>Effective</h3>
	  <div className='line'><div></div></div>
    <RemoveRedEye  style={{fontSize:"70px", marginTop:"15px", marginBottom:"15px"}}/>
    <p>Heloo world to my friends in the internet</p>
	</div>
  )
}
  
