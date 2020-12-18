import React from "react";
import "./Conversation.scss";
import Mohan from "../../assets/images/Mohan-muruge.jpg";

const Conversation = () => {
  return (
    <section class="conversation">
      <h4 class="conversation__title">3 Comments</h4>
      <div class="conversation__container">
        <div class="conversation__profile-image-container">
          <img class="conversation__profile-image" src={Mohan} alt="profile picture for user" />
        </div>
        <div class="conversation__input-container">
          <form class="conversation__form">
            <label class="conversation__input-label" for="conversation">
              JOIN THE CONVERSATION
            </label>
            <div className="conversation__input-button-container">
              <textarea class="conversation__input-comment-field" id="conversation__comment" type="text" name="conversation" placeholder="Write comment here" required></textarea>
              <div class="conversation__button-container">
                <button class="conversation__button" type="submit">
                  COMMENT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
