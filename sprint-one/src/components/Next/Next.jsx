import React from "react";
import "./Next.scss";
import Surfer from "../../assets/images/video-list-1.jpg";
import Surfer1 from "../../assets/images/video-list-2.jpg";
import Surfer2 from "../../assets/images/video-list-3.jpg";
import Surfer3 from "../../assets/images/video-list-4.jpg";
import Surfer4 from "../../assets/images/video-list-5.jpg";
import Surfer5 from "../../assets/images/video-list-6.jpg";
import Surfer6 from "../../assets/images/video-list-7.jpg";
import Surfer7 from "../../assets/images/video-list-8.jpg";

const Next = () => {
  return (
    <section class="next">
      <h3 class="next__title">NEXT VIDEO</h3>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Become A Travel Pro In One Easy Lesson</div>
          <div class="next__video-content-author">Bernice Lambert</div>
        </div>
      </div>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer1} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Les Houches The Hidden Gem Of The Chamonix</div>
          <div class="next__video-content-author">Bernard Patrick</div>
        </div>
      </div>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer2} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Travel Health Useful Medical Information For</div>
          <div class="next__video-content-author">Lizzie Burton</div>
        </div>
      </div>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer3} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Cheap Airline Tickets Great Ways To Save</div>
          <div class="next__video-content-author">Emily Harper</div>
        </div>
      </div>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer4} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Take A Romantic Break In A Boutique Hotel</div>
          <div class="next__video-content-author">Ethan Owen</div>
        </div>
      </div>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer5} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Choose The Perfect Accommodations</div>
          <div class="next__video-content-author">Lydia Perez</div>
        </div>
      </div>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer6} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Cruising Destination Ideas</div>
          <div class="next__video-content-author">Timothy Austin</div>
        </div>
      </div>
      <div class="next__video-container">
        <div class="next__video-picture-container">
          <img class="next__video-picture" src={Surfer7} />
        </div>
        <div class="next__video-content-container">
          <div class="next__video-content-title">Train Travel On Track For Safety</div>
          <div class="next__video-content-author">Scotty Cranmer</div>
        </div>
      </div>
    </section>
  );
};

export default Next;
