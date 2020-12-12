import React from "react";
import "./Video.scss";
import Play from "../../assets/icons/Icon-play.svg";
import Pause from "../../assets/icons/Icon-pause.svg";
import Size from "../../assets/icons/Icon-fullscreen.svg";
import Volume from "../../assets/icons/Icon-volume.svg";

const Video = () => {
  return (
    <div className="video">
      <div className="video__video-container">
        <video className="video__video" />
        {/* <div className="video__controls">
          <div className="video__controls-play-container">
            <img className="video__controls-play" src={Play} />
          </div>
          <div className="video__controls-progress">
            <span className="video__controls-progress-numbers">0:00 / 0:42</span>
          </div>
          <div className="video__controls-container-size-volume">
            <img className="video__controls-size" src={Size} />
            <img className="video__controls-volume" src={Volume} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Video;
