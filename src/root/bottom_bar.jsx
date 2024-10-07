import React, { useEffect, useRef } from 'react';
import './bottom_bar.css';
import { North } from '@mui/icons-material';
const DownBar = () => {
  return (
    <div className='main_footer'>
    <div className="lets-collaborate">
      <div className="collab-container">
        <h1 className="collab-heading">Let's<br />Collaborate</h1>
        <div className="collab-links">
            <a href="#">GitHub</a>
            <a href="#">TheRoom</a>
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
      <footer>
        <div className="footer-content">
          <div className="logo">KINGSLEYOKPO.TECH</div>
          <div className="divider"></div>
          <div className="copyright">c theguy@kingsleyokpo.tech all rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default DownBar;
