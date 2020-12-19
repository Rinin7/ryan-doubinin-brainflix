import React from "react";
import "./Next.scss";

function Next({ videoList }) {
  let { id, image, title, channel } = videoList;
  return (
    <div className="next__video-container">
      <div className="next__video-picture-container">
        <img className="next__video-picture" src={image} alt={title} />
      </div>
      <div className="next__video-content-container">
        <div className="next__video-content-title">{title}</div>
        <div className="next__video-content-author">{channel}</div>
      </div>
    </div>
  );
}

export default Next;
