import React from "react";
import "./Comments.scss";
import EmptyProfile from "../../assets/images/emptyprofile.png";

function Comments({ commentList }) {
  let { id, name, timestamp, comment } = commentList;
  return (
    <section className="comments" key={id}>
      <div className="comments__history">
        <div className="comments__history-profile-container">
          <img className="comments__history-profile" src={EmptyProfile} alt="profile picture for user" />
        </div>
        <div className="comments__history-text-container">
          <div className="comments__history-header-container">
            <div className="comments__history-name">{name}</div>
            <div className="comments__history-date">{timestamp}</div>
          </div>
          <div className="comments__history-body">{comment}</div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
