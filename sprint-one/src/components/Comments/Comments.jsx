import React from "react";
import "./Comments.scss";
import EmptyProfile from "../../assets/images/emptyprofile.png";

function Comments(props) {
  return (
    <section class="comments">
      <div class="comments__history">
        <div class="comments__history-profile-container">
          <img class="comments__history-profile" src={EmptyProfile} alt="profile picture for user" />
        </div>
        <div class="comments__history-text-container">
          <div class="comments__history-header-container">
            <div class="comments__history-name">{props.name}</div>
            <div class="comments__history-date">{props.date}</div>
          </div>
          <div class="comments__history-body">{props.comment}</div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
