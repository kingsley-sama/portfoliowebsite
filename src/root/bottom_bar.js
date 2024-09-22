import React, { useEffect, useRef } from 'react';
import './bottom_bar.css';
import { North } from '@mui/icons-material';
const DownBar = () => {
  return (
    <div className="lets-collaborate">
      <div class="collab-container">
        <h1 class="collab-heading">Let's<br />Collaborate</h1>
        <div class="collab-links">
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="#">Email</a>
        </div>
      </div>
      <div className="circle">
        <North className="arrow" style={{fontSize: '60px'}}/>
        <span className="hire-me">Hire Me</span>
      </div>
    </div>
  );
};

export default DownBar;
