import React from "react";
import "./Player.scss";
import VideoViews from "../../assets/icons/Icon-views.svg";

function Player({ currentVideo, likesHandler }) {
  let { title, description, channel, views, likes, liked } = currentVideo;
  let date = new Date(currentVideo.timestamp);
  let likedClass = liked ? " player__video-likes-img-red" : "";
  return (
    <div className="player__video-text-container">
      <div className="player__video-text-container-left">
        <div className="player__video-title-container">
          <h1 className="player__video-title">{title}</h1>
        </div>
        <div className="player__video-subheader-container">
          <div className="player__video-publish">
            <h4 className="player__video-author">{channel}</h4>
            <h4 className="player__video-date">{date.toLocaleDateString("en-US")}</h4>
          </div>
          <div className="player__video-social">
            <img className="player__video-views-img" src={VideoViews} alt="grey eyeball to represent views" />
            <h4 className="player__video-views">{views}</h4>
            <button className={"player__video-likes-img" + likedClass} onClick={likesHandler} alt="grey heart to represent likes"></button>
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
