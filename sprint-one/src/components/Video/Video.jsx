import React from "react";
import "./Video.scss";
import videoplayer from "../../assets/images/video-list-0.jpg";

const Video = () => {
  return (
    <div className="video">
      <div className="video__video-container">
        <img className="video__video" src={videoplayer} />
      </div>
    </div>
  );
};

export default Video;
