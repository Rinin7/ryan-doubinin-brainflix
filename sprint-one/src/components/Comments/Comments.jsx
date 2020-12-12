import React from "react";
import "./Comments.scss";
import EmptyProfile from "../../assets/images/emptyprofile.png";

const Comments = () => {
  return (
    <section class="comments">
      <div class="comments__history">
        <div class="comments__history-profile-container">
          <img class="comments__history-profile" src={EmptyProfile} alt="profile picture for user" />
        </div>
        <div class="comments__history-text-container">
          <div class="comments__history-header-container">
            <div class="comments__history-name">Micheal Lyons</div>
            <div class="comments__history-date">12/18/2018</div>
          </div>
          <div class="comments__history-body">
            They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.
          </div>
        </div>
      </div>
      <div class="comments__history">
        <div class="comments__history-profile-container">
          <img class="comments__history-profile" src={EmptyProfile} alt="profile picture for user" />
        </div>
        <div class="comments__history-text-container">
          <div class="comments__history-header-container">
            <div class="comments__history-name">Gary Wong</div>
            <div class="comments__history-date">12/18/2018</div>
          </div>
          <div class="comments__history-body">
            Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!
          </div>
        </div>
      </div>
      <div class="comments__history">
        <div class="comments__history-profile-container">
          <img class="comments__history-profile" src={EmptyProfile} alt="profile picture for user" />
        </div>
        <div class="comments__history-text-container">
          <div class="comments__history-header-container">
            <div class="comments__history-name">Theodore Duncan</div>
            <div class="comments__history-date">11/15/2018</div>
          </div>
          <div class="comments__history-body">
            How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
