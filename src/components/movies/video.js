import React, { useRef, useState, useEffect } from 'react';
import './video.css';
import PlayButton from './playbutton';
import { FastForward, FastRewind, Pause, PlayArrowOutlined, SpeedOutlined, VolumeUp, VolumeOff, Fullscreen } from '@mui/icons-material';

const VideoPlayer = ({ videoId }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const progressBarRef = useRef(null);
  const currentVidTimeRef = useRef(null);
  const videoDurationRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const speedOptionsRef = useRef(null);

  const [isControlsVisible, setControlsVisible] = useState(true);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isThumbnailVisible, setThumbnailVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  let timer;

  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtubePlayer', {
        height: '60%',
        width: '70%',
        videoId: videoId,
        playerVars: {
          'playsinline': 1,
          'controls': 0,
          'rel': 0
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    const hideControls = () => {
      if (isPlaying) {
        timer = setTimeout(() => {
          setControlsVisible(false);
        }, 3000);
      }
    };

    hideControls();

    const handleMouseMove = () => {
      setControlsVisible(true);
      clearTimeout(timer);
      hideControls();
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      containerElement.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [videoId, isPlaying]);

  const onPlayerReady = (event) => {
    setDuration(event.target.getDuration());
    // Start updating current time
    setInterval(() => {
      setCurrentTime(event.target.getCurrentTime());
    }, 1000);
  };

  const onPlayerStateChange = (event) => {
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
    setThumbnailVisible(event.data !== window.YT.PlayerState.PLAYING);
  };

  const formatTime = (time) => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    return hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  };

  const handleTimelineMouseMove = (e) => {
    const timelineWidth = e.target.clientWidth;
    const offsetX = e.nativeEvent.offsetX;
    const percent = Math.floor((offsetX / timelineWidth) * duration);

    const progressTime = e.target.querySelector('span');
    const newOffsetX = Math.max(20, Math.min(offsetX, timelineWidth - 20));
    progressTime.style.left = `${newOffsetX}px`;
    progressTime.innerText = formatTime(percent);
  };

  const handleTimelineClick = (e) => {
    const timelineWidth = e.target.clientWidth;
    const newTime = (e.nativeEvent.offsetX / timelineWidth) * duration;
    playerRef.current.seekTo(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    playerRef.current.setVolume(newVolume);
    setVolume(newVolume);
  };

  const handleSpeedChange = (speed) => {
    playerRef.current.setPlaybackRate(speed);
    setPlaybackRate(speed);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleFullScreenToggle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const handleSkipBackward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5, true);
  };

  const handleSkipForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5, true);
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(volume);
      playerRef.current.setPlaybackRate(playbackRate);
    }
  }, [volume, playbackRate]);

  return (
    <>
      <a className="git-icon" href="https://github.com/kingsley-sama" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/fluidicon.png" alt="GitHub" />
      </a>

      <div className={`container ${isControlsVisible ? 'show-controls' : ''}`} ref={containerRef}>
        {isThumbnailVisible && (
          <div className="thumbnail">
            <PlayButton play={() => handlePlayPause()} />
          </div>
        )}
        <div className="wrapper">
          <div className="video-timeline" onMouseMove={handleTimelineMouseMove} onClick={handleTimelineClick}>
            <div className="progress-area">
              <span>00:00</span>
              <div className="progress-bar" ref={progressBarRef} style={{width: `${(currentTime / duration) * 100}%`}}></div>
            </div>
          </div>
          <ul className="video-controls">
            <li className="options left">
              <button className="volume" onClick={() => setVolume(volume ? 0 : 50)}>
                {volume ? <VolumeUp /> : <VolumeOff />}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                ref={volumeSliderRef}
              />
              <div className="video-timer">
                <p className="current-time" ref={currentVidTimeRef}>{formatTime(currentTime)}</p>
                <p className="separator"> / </p>
                <p className="video-duration" ref={videoDurationRef}>{formatTime(duration)}</p>
              </div>
            </li>
            <li className="options center">
              <button className="skip-backward" onClick={handleSkipBackward}>
                <FastRewind />
              </button>
              <button className="play-pause" onClick={handlePlayPause}>
                {isPlaying ? <Pause /> : <PlayArrowOutlined />}
              </button>
              <button className="skip-forward" onClick={handleSkipForward}>
                <FastForward />
              </button>
            </li>
            <li className="options right">
              <div className="playback-content">
                <button className="playback-speed" onClick={() => speedOptionsRef.current.classList.toggle('show')}>
                  <SpeedOutlined />
                </button>
                <ul className="speed-options" ref={speedOptionsRef}>
                  {[2, 1.5, 1, 0.75, 0.5].map(speed => (
                    <li key={speed} data-speed={speed} onClick={() => handleSpeedChange(speed)} className={playbackRate === speed ? 'active' : ''}>
                      {speed}x
                    </li>
                  ))}
                </ul>
              </div>
              <button className="fullscreen" onClick={handleFullScreenToggle}>
                <Fullscreen />
              </button>
            </li>
          </ul>
        </div>
        <div id="youtubePlayer"></div>
      </div>
    </>
  );
};

export default VideoPlayer;
// import React, { useRef, useState, useEffect } from 'react';
// import './video.css';
// import PlayButton from './playbutton';
// import { FastForward, FastRewind, Pause, PlayArrowOutlined, SpeedOutlined } from '@mui/icons-material';

// const VideoPlayer = ({ videoId }) => {
//   const containerRef = useRef(null);
//   const playerRef = useRef(null);
//   const progressBarRef = useRef(null);
//   const currentVidTimeRef = useRef(null);
//   const videoDurationRef = useRef(null);
//   const volumeSliderRef = useRef(null);
//   const speedOptionsRef = useRef(null);

//   const [isControlsVisible, setControlsVisible] = useState(true);
//   const [volume, setVolume] = useState(50);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [isThumbnailVisible, setThumbnailVisible] = useState(true);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   let timer;

//   useEffect(() => {
//     // Load the YouTube API script
//     const tag = document.createElement('script');
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // Initialize the YouTube player when the API is ready
//     window.onYouTubeIframeAPIReady = () => {
//       playerRef.current = new window.YT.Player('youtubePlayer', {
//         height: '360',
//         width: '640',
//         videoId: videoId,
//         playerVars: {
//           'playsinline': 1,
//           'controls': 0,
//           'rel': 0
//         },
//         events: {
//           'onReady': onPlayerReady,
//           'onStateChange': onPlayerStateChange
//         }
//       });
//     };

//     const hideControls = () => {
//       if (isPlaying) {
//         timer = setTimeout(() => {
//           setControlsVisible(false);
//         }, 3000);
//       }
//     };

//     hideControls();

//     const handleMouseMove = () => {
//       setControlsVisible(true);
//       clearTimeout(timer);
//       hideControls();
//     };

//     const containerElement = containerRef.current;
//     containerElement.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       containerElement.removeEventListener('mousemove', handleMouseMove);
//       clearTimeout(timer);
//     };
//   }, [videoId, isPlaying]);

//   const onPlayerReady = (event) => {
//     setDuration(event.target.getDuration());
//     // Start updating current time
//     setInterval(() => {
//       setCurrentTime(event.target.getCurrentTime());
//     }, 1000);
//   };

//   const onPlayerStateChange = (event) => {
//     setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
//     setThumbnailVisible(event.data !== window.YT.PlayerState.PLAYING);
//   };

//   const formatTime = (time) => {
//     let seconds = Math.floor(time % 60);
//     let minutes = Math.floor(time / 60) % 60;
//     let hours = Math.floor(time / 3600);

//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     hours = hours < 10 ? `0${hours}` : hours;

//     return hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
//   };

//   const handleTimelineMouseMove = (e) => {
//     const timelineWidth = e.target.clientWidth;
//     const offsetX = e.nativeEvent.offsetX;
//     const percent = Math.floor((offsetX / timelineWidth) * duration);

//     const progressTime = e.target.querySelector('span');
//     const newOffsetX = Math.max(20, Math.min(offsetX, timelineWidth - 20));
//     progressTime.style.left = `${newOffsetX}px`;
//     progressTime.innerText = formatTime(percent);
//   };

//   const handleTimelineClick = (e) => {
//     const timelineWidth = e.target.clientWidth;
//     const newTime = (e.nativeEvent.offsetX / timelineWidth) * duration;
//     playerRef.current.seekTo(newTime);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     playerRef.current.setVolume(newVolume);
//     setVolume(newVolume);
//   };

//   const handleSpeedChange = (speed) => {
//     playerRef.current.setPlaybackRate(speed);
//     setPlaybackRate(speed);
//   };

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       playerRef.current.pauseVideo();
//     } else {
//       playerRef.current.playVideo();
//     }
//   };

//   const handleFullScreenToggle = () => {
//     if (document.fullscreenElement) {
//       document.exitFullscreen();
//     } else {
//       containerRef.current.requestFullscreen();
//     }
//   };

//   useEffect(() => {
//     if (playerRef.current) {
//       playerRef.current.setVolume(volume);
//       playerRef.current.setPlaybackRate(playbackRate);
//     }
//   }, [volume, playbackRate]);

//   return (
//     <>
//       <a className="git-icon" href="https://github.com/kingsley-sama" target="_blank" rel="noopener noreferrer">
//         <img src="https://github.com/fluidicon.png" alt="GitHub" />
//       </a>

//       <div className={`container ${isControlsVisible ? 'show-controls' : ''}`} ref={containerRef}>
//         {isThumbnailVisible && (
//           <div className="thumbnail">
//             <PlayButton play={() => handlePlayPause()} />
//           </div>
//         )}
//         <div className="wrapper">
//           <div className="video-timeline" onMouseMove={handleTimelineMouseMove} onClick={handleTimelineClick}>
//             <div className="progress-area">
//               <span>00:00</span>
//               <div className="progress-bar" ref={progressBarRef} style={{ width: `${(currentTime / duration) * 100}%` }}></div>
//             </div>
//           </div>
//           <ul className="video-controls">
//             <li className="options left">
//               <button className="volume" onClick={() => setVolume(volume ? 0 : 0.5)}>
//                 <i className={`fa-solid ${volume ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
//               </button>
//               <input
//                 type="range"
//                 min="0"
//                 max="1"
//                 step="any"
//                 value={volume}
//                 onChange={handleVolumeChange}
//                 ref={volumeSliderRef}
//               />
//               <div className="video-timer">
//                 <p className="current-time" ref={currentVidTimeRef}>00:00</p>
//                 <p className="separator"> / </p>
//                 <p className="video-duration" ref={videoDurationRef}>00:00</p>
//               </div>
//             </li>
//             <li className="options center">
//               <button className="skip-backward" onClick={() => { mainVideoRef.current.currentTime -= 5; blurVideoRef.current.currentTime -= 5; }}>
//                 <i className="fas"> <FastRewind /></i>
//               </button>
//               <button className="play-pause" onClick={handlePlayPause}>
//                 <i className={`fas`}>{isPlaying ? <Pause /> : <PlayArrowOutlined />} </i>
//               </button>
//               <button className="skip-forward" onClick={() => { mainVideoRef.current.currentTime += 5; blurVideoRef.current.currentTime += 5; }}>
//                 <i className="fas"><FastForward /></i>
//               </button>
//             </li>
//             <li className="options right">
//               <div className="playback-content">
//                 <button className="playback-speed" onClick={() => speedOptionsRef.current.classList.toggle('show')}>
//                   <span className="material-symbols-rounded"><SpeedOutlined /></span>
//                 </button>
//                 <ul className="speed-options" ref={speedOptionsRef}>
//                   {[2, 1.5, 1, 0.75, 0.5].map(speed => (
//                     <li key={speed} data-speed={speed} onClick={() => handleSpeedChange(speed)} className={playbackRate === speed ? 'active' : ''}>
//                       {speed}x
//                     </li>
//                   ))}
//                 </ul>
//               </div>


//               <button className="fullscreen" onClick={handleFullScreenToggle}>
//                 <i className="fa-solid fa-expand"></i>
//               </button>/             </li>
//           </ul>
//           {/* Control buttons (same as before) */}
//         </div>
//         <div id="youtubePlayer"></div>
//       </div>
//     </>
//   );
// };

// export default VideoPlayer;
