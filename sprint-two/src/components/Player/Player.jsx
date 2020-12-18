import React from "react";
import "./Player.scss";
import VideoViews from "../../assets/icons/Icon-views.svg";
import VideoLikes from "../../assets/icons/Icon-likes.svg";

function Player(props) {
  return (
    <div className="player__video-text-container">
      <div className="player__video-text-container-left">
        <div className="player__video-title-container">
          <h1 className="player__video-title">{props.title}</h1>
        </div>
        <div className="player__video-subheader-container">
          <div className="player__video-publish">
            <h4 className="player__video-author">{props.channel}</h4>
            <h4 className="player__video-date">{props.timestamp}</h4>
          </div>
          <div className="player__video-social">
            <img className="player__video-views-img" src={VideoViews} alt="small image of an eyeball" />
            <h4 className="player__video-views">{props.views}</h4>
            <img className="player__video-likes-img" src={VideoLikes} alt="small image of a heart" />
            <h4 className="player__video-likes">{props.likes}</h4>
          </div>
        </div>
        <div className="player__video-body-container">
          <p className="player__video-body">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
