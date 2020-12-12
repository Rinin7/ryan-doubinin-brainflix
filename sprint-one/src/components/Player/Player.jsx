import React from "react";
import "./Player.scss";
import VideoViews from "../../assets/icons/Icon-views.svg";
import VideoLikes from "../../assets/icons/Icon-likes.svg";

const Player = () => {
  return (
    <div className="player__video-text-container">
      <div className="player__video-text-container-left">
        <div className="player__video-title-container">
          <h1 className="player__video-title">BMX Rampage: 2018 Highlights</h1>
        </div>
        <div className="player__video-publish">
          <h3 className="player__video-author">By Red Cow</h3>
          <h3 className="player__video-date">12/18/2018</h3>
        </div>
        <div className="player__video-social">
          <img className="player__video-views-img" src={VideoViews} />
          <h3 className="player__video-views">1,001,023</h3>
          <img className="player__video-likes-img" src={VideoLikes} />
          <h3 className="player__video-likes">110,985</h3>
        </div>
        <div className="player__video-body-container">
          <p className="player__video-body">
            On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.
            While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the
            second time -- eight years after his first Red Cow Rampage title
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;
