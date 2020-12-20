import React from "react";
import "./Video.scss";
import Play from "../../assets/icons/Icon-play.svg";
import Size from "../../assets/icons/Icon-fullscreen.svg";
import Volume from "../../assets/icons/Icon-volume.svg";

function Video({ videoDisplay }) {
  let { id, image, duration, title } = videoDisplay;
  return (
    <div className="video" key={id}>
      <div className="video__video-container">
        <video className="video__video" poster={image} alt={title} />
        <div className="video__controls">
          <div className="video__controls-play-container">
            <img className="video__controls-play" src={Play} alt="an image of the play button" />
          </div>
          <div className="video__controls-progress">
            <div className="video__controls-progress-bar"></div>
            <span className="video__controls-progress-numbers">0:00 / {duration}</span>
          </div>
          <div className="video__controls-container-size-volume">
            <img className="video__controls-size" src={Size} alt="an image of the fullscreen button" />
            <img className="video__controls-volume" src={Volume} alt="an image of the volume control button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
