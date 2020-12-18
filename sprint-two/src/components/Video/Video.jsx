import React from "react";
import "./Video.scss";
import Play from "../../assets/icons/Icon-play.svg";
import Size from "../../assets/icons/Icon-fullscreen.svg";
import Volume from "../../assets/icons/Icon-volume.svg";

function Video(props) {
  return (
    <div className="video">
      <div className="video__video-container">
        <video className="video__video" poster={props.image} alt={props.alt} />
        <div className="video__controls">
          <div className="video__controls-play-container">
            <img className="video__controls-play" src={Play} alt="an image of the play button" />
          </div>
          <div className="video__controls-progress">
            <div className="video__controls-progress-bar"></div>
            <span className="video__controls-progress-numbers">{props.duration}</span>
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
