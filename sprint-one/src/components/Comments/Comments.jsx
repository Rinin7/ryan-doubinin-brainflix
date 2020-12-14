import React from "react";
import "./Comments.scss";
import EmptyProfile from "../../assets/images/emptyprofile.png";

function Comments(props) {
  return (
    <section className="comments">
      <div className="comments__history">
        <div className="comments__history-profile-container">
          <img className="comments__history-profile" src={EmptyProfile} alt="profile picture for user" />
        </div>
        <div className="comments__history-text-container">
          <div className="comments__history-header-container">
            <div className="comments__history-name">{props.name}</div>
            <div className="comments__history-date">{props.date}</div>
          </div>
          <div className="comments__history-body">{props.comment}</div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
