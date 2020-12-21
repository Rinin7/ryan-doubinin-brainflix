import React from "react";
import "./Comments.scss";
import EmptyProfile from "../../assets/images/emptyprofile.png";

function Comments({ commentList }) {
  let { name, comment } = commentList;
  let date = new Date(commentList.timestamp);
  return (
    <section className="comments">
      <div className="comments__history">
        <div className="comments__history-profile-container">
          <img className="comments__history-profile" src={EmptyProfile} alt="grey circle" />
        </div>
        <div className="comments__history-text-container">
          <div className="comments__history-header-container">
            <div className="comments__history-name">{name}</div>
            <div className="comments__history-date">{date.toLocaleDateString("en-US")}</div>
          </div>
          <div className="comments__history-body">{comment}</div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
