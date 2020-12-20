import React from "react";
import "./Conversation.scss";
import Mohan from "../../assets/images/Mohan-muruge.jpg";

function Conversation({ comments }) {
  return (
    <section className="conversation">
      <h4 className="conversation__title">{comments.length} Comments</h4>
      <div className="conversation__container">
        <div className="conversation__profile-image-container">
          <img className="conversation__profile-image" src={Mohan} alt="profile picture for user" />
        </div>
        <div className="conversation__input-container">
          <form className="conversation__form">
            <label className="conversation__input-label" for="conversation">
              JOIN THE CONVERSATION
            </label>
            <div className="conversation__input-button-container">
              <textarea className="conversation__input-comment-field" id="conversation__comment" type="text" name="conversation" placeholder="Write comment here" required></textarea>
              <div className="conversation__button-container">
                <button className="conversation__button" type="submit">
                  COMMENT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Conversation;
