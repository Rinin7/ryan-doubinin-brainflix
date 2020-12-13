import React from "react";
import "./Next.scss";

function Next(props) {
  return (
    <div class="next__video-container">
      <div class="next__video-picture-container">
        <img class="next__video-picture" src={props.image} alt={props.alt} />
      </div>
      <div class="next__video-content-container">
        <div class="next__video-content-title">{props.title}</div>
        <div class="next__video-content-author">{props.channel}</div>
      </div>
    </div>
  );
}

export default Next;
