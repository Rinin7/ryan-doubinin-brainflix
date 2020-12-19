import React from "react";
import "./Player.scss";
import VideoViews from "../../assets/icons/Icon-views.svg";
import VideoLikes from "../../assets/icons/Icon-likes.svg";

function Player({ currentVideo }) {
  let { id, title, description, channel, timestamp, views, likes } = currentVideo;
  return (
    <div className="player__video-text-container">
      <div className="player__video-text-container-left">
        <div className="player__video-title-container">
          <h1 className="player__video-title">{title}</h1>
        </div>
        <div className="player__video-subheader-container">
          <div className="player__video-publish">
            <h4 className="player__video-author">{channel}</h4>
            <h4 className="player__video-date">{timestamp}</h4>
          </div>
          <div className="player__video-social">
            <img className="player__video-views-img" src={VideoViews} alt="small image of an eyeball" />
            <h4 className="player__video-views">{views}</h4>
            <img className="player__video-likes-img" src={VideoLikes} alt="small image of a heart" />
            <h4 className="player__video-likes">{likes}</h4>
          </div>
        </div>
        <div className="player__video-body-container">
          <p className="player__video-body">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
