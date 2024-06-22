import React, { useState, useRef, useEffect } from 'react';
import './card.css'; // Import the CSS file

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleVideoClick = () => {
    if (!playing) {
      togglePlay();
    }
  };

  const updateButton = () => {
    const video = videoRef.current;
    setPlaying(!video.paused);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    
    return () => {
      video.removeEventListener('play', updateButton);
      video.removeEventListener('pause', updateButton);
    };
  }, []);

  return (
    <div className="player">
      <div className={`thumbnail ${playing ? 'hide' : ''}`} onClick={togglePlay}>
        <div className="play-button">&#9658;</div>
      </div>
      <video
        className="player__video viewer"
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onClick={handleVideoClick}
        style={{ width: '100%' }}
      />
      {/* ... other controls */}
    </div>
  );
};

export default VideoPlayer;
