import './style.css'
import React, { useState, useEffect } from 'react';
const PreLoader = () => {
  return (
    <div className='preloading-page' id='loading-page'>
      <CircularPreloader />
    </div>
  )
}
const CircularPreloader = () => {



  return (
    <div className="preloader-container">
      {/*<div className="kingsley-text">kingsley</div> */}
      <video className="circular-progress" autoPlay loop muted>
        <source src="/assets/ai.mp4" />
      </video>
      <div className="progress-text"> <Loader /></div>
      <div className="quote">
        "Hang tight, code is loading - somewhere between genius and 'I hope
        this works!' But don't you worry, Either way, you're in for a
        ride!" - ChatGPT
      </div>
    </div>
  );
};

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < 100) {
          return prevCount + 1;
        }
        clearInterval(timer);
        return 100;
      });
    }, 50); // Adjust this value to make the counter faster or slower

    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: '20px',
        color:'#c9c9c9',
        marginBottom: '20px'
      }}>
        {count}%
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>
        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
