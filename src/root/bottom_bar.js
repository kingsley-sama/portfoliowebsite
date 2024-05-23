import React from 'react';
import './bottom_bar.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {FacebookSharp,GitHub, Twitter, LinkedIn, Instagram, ArrowDownward, ViewCarousel, ArrowDropUp, Email, YouTube, Message} from '@mui/icons-material';

const DownBar=()=>{
    return(
      <div className='downcomponent'>
        <DownBar />
        <div className='our_socials'>
          <div className='modals'>
            <div className='goto_top'>
              <ArrowUpwardIcon style={{ color: 'white', fontSize: '30px', margin: "5px" }} />
            </div>
          </div>
        </div>
        <div className='text'>
          <p>copyright: kingsleyokpo.tech 2024</p>
          <p>Email: kngsley2018@gmail.com
          </p>
          <p>This website was made responsively  with love
          </p>
        </div>

      </div>
    )
       
}
export default DownBar;


const DownMenu = () => {
  return (
    <div className="container">
      <img
        src="https://i.pinimg.com/736x/31/df/a2/31dfa22757ddf6497d5ef18c6d27ef3f.jpg"
        alt="Background"
        className="background-image"
      />
      <div className="overlay">
        <ul className="menu-options">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export {DownMenu};
