import React from 'react';
import './play_button.css';

const PlayButton = ({play}) => {
  return (
    <div className="play-button" onClick={play}>
      <div className="play-icon" />
    </div>
  );
};

export default PlayButton;
