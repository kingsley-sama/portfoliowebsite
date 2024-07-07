import React, { useRef, useState, useEffect } from 'react';
import './video.css';
import PlayButton from './playbutton';

const VideoPlayer = () => {
  const containerRef = useRef(null);
  const mainVideoRef = useRef(null);
  const blurVideoRef = useRef(null);
  const progressBarRef = useRef(null);
  const currentVidTimeRef = useRef(null);
  const videoDurationRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const speedOptionsRef = useRef(null);

  const [isControlsVisible, setControlsVisible] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isThumbnailVisible, setThumbnailVisible] = useState(true); // New state for thumbnail visibility

  let timer;

  useEffect(() => {
    const hideControls = () => {
      if (!mainVideoRef.current.paused) {
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
    };
  }, []);

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
    const percent = Math.floor((offsetX / timelineWidth) * mainVideoRef.current.duration);

    const progressTime = e.target.querySelector('span');
    const newOffsetX = Math.max(20, Math.min(offsetX, timelineWidth - 20));
    progressTime.style.left = `${newOffsetX}px`;
    progressTime.innerText = formatTime(percent);
  };

  const handleTimelineClick = (e) => {
    const timelineWidth = e.target.clientWidth;
    const newTime = (e.nativeEvent.offsetX / timelineWidth) * mainVideoRef.current.duration;
    mainVideoRef.current.currentTime = newTime;
    blurVideoRef.current.currentTime = newTime;
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = mainVideoRef.current;
    const percent = (currentTime / duration) * 100;
    progressBarRef.current.style.width = `${percent}%`;
    currentVidTimeRef.current.innerText = formatTime(currentTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    mainVideoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleSpeedChange = (speed) => {
    mainVideoRef.current.playbackRate = speed;
    blurVideoRef.current.playbackRate = speed;
    setPlaybackRate(speed);
  };

  const handlePlayPause = () => {
    if (mainVideoRef.current.paused) {
      mainVideoRef.current.play();
      blurVideoRef.current.play();
      setIsPlaying(true);
      setThumbnailVisible(false); // Hide thumbnail when playing
    } else {
      mainVideoRef.current.pause();
      blurVideoRef.current.pause();
      setIsPlaying(false);
      setThumbnailVisible(true); // Show thumbnail when paused
    }
  };

  const handleFullScreenToggle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    mainVideoRef.current.volume = volume;
    mainVideoRef.current.playbackRate = playbackRate;
    blurVideoRef.current.playbackRate = playbackRate;

    mainVideoRef.current.addEventListener('loadeddata', () => {
      videoDurationRef.current.innerText = formatTime(mainVideoRef.current.duration);
    });

    return () => {
      clearTimeout(timer);
    };
  }, [volume, playbackRate]);

  return (
    <>
      <a className="git-icon" href="https://github.com/kingsley-sama" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/fluidicon.png" alt="GitHub" />
      </a>
      <video
        ref={blurVideoRef}
        src="https://vaibhav1663.github.io/Youtube-Ambient-Mode/demo-video.mp4"
        poster="https://vaibhav1663.github.io/Youtube-Ambient-Mode/poster.jpg"
        id="blurred"
        muted
        autoPlay
        loop
      />

      <div className={`container ${isControlsVisible ? 'show-controls' : ''}`} ref={containerRef}>
              {isThumbnailVisible && (
        <div className="thumbnail">
          <PlayButton onClick={handlePlayPause} />
        </div>
      )}
        <div className="wrapper">
          <div className="video-timeline" onMouseMove={handleTimelineMouseMove} onClick={handleTimelineClick}>
            <div className="progress-area">
              <span>00:00</span>
              <div className="progress-bar" ref={progressBarRef}></div>
            </div>
          </div>
          <ul className="video-controls">
            <li className="options left">
              <button className="volume" onClick={() => setVolume(volume ? 0 : 0.5)}>
                <i className={`fa-solid ${volume ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="any"
                value={volume}
                onChange={handleVolumeChange}
                ref={volumeSliderRef}
              />
              <div className="video-timer">
                <p className="current-time" ref={currentVidTimeRef}>00:00</p>
                <p className="separator"> / </p>
                <p className="video-duration" ref={videoDurationRef}>00:00</p>
              </div>
            </li>
            <li className="options center">
              <button className="skip-backward" onClick={() => { mainVideoRef.current.currentTime -= 5; blurVideoRef.current.currentTime -= 5; }}>
                <i className="fas fa-backward"></i>
              </button>
              <button className="play-pause" onClick={handlePlayPause}>
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </button>
              <button className="skip-forward" onClick={() => { mainVideoRef.current.currentTime += 5; blurVideoRef.current.currentTime += 5; }}>
                <i className="fas fa-forward"></i>
              </button>
            </li>
            <li className="options right">
              <div className="playback-content">
                <button className="playback-speed" onClick={() => speedOptionsRef.current.classList.toggle('show')}>
                  <span className="material-symbols-rounded">slow_motion_video</span>
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
                <i className="fa-solid fa-expand"></i>
              </button>
            </li>
          </ul>
        </div>
        <video
          ref={mainVideoRef}
          src="https://vaibhav1663.github.io/Youtube-Ambient-Mode/demo-video.mp4"
          poster="https://vaibhav1663.github.io/Youtube-Ambient-Mode/poster.jpg"
          onTimeUpdate={handleTimeUpdate}
        ></video>
      </div>
    </>
  );
};

export default VideoPlayer;
