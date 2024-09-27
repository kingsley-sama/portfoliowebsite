import React, { useState, useRef, useEffect } from 'react';
import { PlayArrow, Close } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import './style.css'; // Make sure to create this CSS file

const Services = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => setIsVideoOpen(!isVideoOpen);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  const handleOverlayClick = (e) => {
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      toggleVideo();
    }
  };

  return (
    <div className='service-page'>
      <div className='service-content'>
        <h3>___ our growth journey </h3>
        <h1>User Centric Software Development</h1>
        <p>
          Hi do you want to know what I can do for you? Take a few moments
          to see the core technical services I provide and how I go about them.
        </p>
      </div>
      <div className='service-img'>
        <div className='service-img_overlay'>
          <button onClick={toggleVideo} className="play-button">
            <PlayArrow style={{color: "white", fontSize: "50px"}}/>
          </button>
        </div>
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="video-overlay"
              onClick={handleOverlayClick}
            >
              <motion.div 
                ref={videoRef}
                className="video-container"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <button 
                  className="close-button"
                  onClick={toggleVideo}
                >
                  <Close style={{fontSize: "24px"}} />
                </button>
                <VideoPlayer />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const VideoPlayer = () => {
  return (
    <div className="video-player-wrapper">
      <iframe 
        className="video-iframe"
        src="https://www.youtube.com/embed/OHf5bapbrcI?si=fbpD6aLJcs1Ou3KP" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Services;
// import React, { useState } from 'react';
// import { PlayArrow, Cancel } from '@mui/icons-material';
// import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
// import "./style.css";

// const Services = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   const toggleVideo = () => setIsVideoOpen(!isVideoOpen);

//   return (
//     <div className='service-page'>
//       <div>
//         <h3>___ our growth journey </h3>
//         <h1>User Centric Software Development</h1>
//         <p>
//           Hi do you want to know what I can do for you? Take a few moments
//           to see the core technical services I provide and how I go about them.
//         </p>
//       </div>
//       <motion.div className='service-img'>
//         <div className='service-img_overlay'>
//           <button onClick={()=>{toggleVideo()}}>
//             <PlayArrow style={{color: "white", fontSize: "50px"}}/>
//           </button>
//         </div>
//         <AnimatePresence>
//           {isVideoOpen && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.3 }}
//               className="video-overlay"
//             >
//               <VideoPlayer onClose={toggleVideo} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// }

// const VideoPlayer = ({ onClose }) => {
//   return (
//     <div className='video_player-container'>
//       <button className="close-button" onClick={onClose}>
//         <Cancel style={{color: "white", fontSize: "24px"}} />
//       </button>
//       <iframe 
//         width="100%" 
//         height="100%" 
//         src="https://www.youtube.com/embed/OHf5bapbrcI?si=fbpD6aLJcs1Ou3KP" 
//         title="YouTube video player" 
//         frameBorder="0" 
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//         referrerPolicy="strict-origin-when-cross-origin" 
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }

// export default Services;
// // import React, { useRef, useState, useEffect } from 'react';
// // import { FastForward, FastRewind, Pause, PlayArrowOutlined, SpeedOutlined, VolumeUp, VolumeOff, Fullscreen, PlayArrow } from '@mui/icons-material';
// // import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
// // import "./style.css"

// // const Services = () => {
// //   const [selectedId, setSelectedId] = useState(null)
// //   return (
// //     <div className='service-page'>
// //       <div>
// //         <h3>___ our growth journey </h3>
// //         <h1>User Centric Software Development</h1>
// //         <p>
// //           Hi do you want to knwo what i can do for you take a few moment
// //           to see the core technical services i prvide and how i go about them
// //         </p>
// //       </div>
// //       <motion.div  className='service-img'>
// //         <div className='service-img_overlay'>
// //           <button>
// //             <PlayArrow style={{color: "white", fontSize: "50px"}}/>
// //           </button>
// //         </div>
// //         <VideoPlayer />
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default Services;


// // const VideoPlayer = ()=>{
// //   return(
// //     <div className='video_player-container'>
// //       <iframe width="560" height="315" src="https://www.youtube.com/embed/OHf5bapbrcI?si=fbpD6aLJcs1Ou3KP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// //     </div>
// //   )
// // }

