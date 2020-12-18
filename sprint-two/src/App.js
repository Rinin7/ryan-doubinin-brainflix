import "./App.scss";
import React from "react";
import Header from "../src/components/Header/Header";
import Video from "../src/components/Video/Video";
import Player from "../src/components/Player/Player";
import Conversation from "./components/Conversation/Conversation";
import Comments from "./components/Comments/Comments";
import Next from "./components/Next/Next";
import { v4 as uuid } from "uuid";
import Biker from "../src/assets/images/video-list-1.jpg";
import Beach from "../src/assets/images/video-list-2.jpg";
import Fruit from "../src/assets/images/video-list-3.jpg";
import Balloons from "../src/assets/images/video-list-4.jpg";
import Hotel from "../src/assets/images/video-list-5.jpg";
import Accommodation from "../src/assets/images/video-list-6.jpg";
import Cruise from "../src/assets/images/video-list-7.jpg";
import Train from "../src/assets/images/video-list-8.jpg";
import BmxRace from "../src/assets/images/video-list-0.jpg";

class App extends React.Component {
  state = {
    mainVideo: {
      id: uuid(),
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "By Red Cow",
      image: BmxRace,
      alt: "two bmx bike riders racing",
      views: "1,001,023",
      likes: "110,985",
      duration: "0:00 / 0:42",
      timestamp: "12/18/2018",
      comments: [
        {
          id: uuid(),
          name: "Micheal Lyons",
          date: "12/18/2018",
          comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          id: uuid(),
          name: "Gary Wong",
          date: "12/18/2018",
          comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          id: uuid(),
          name: "Theodore Duncan",
          date: "11/15/2018",
          comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        },
      ],
    },
    sideVideos: [
      {
        id: uuid(),
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Bernice Lambert",
        image: Biker,
        alt: "bike rider doing stunts in the air",
      },
      {
        id: uuid(),
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Bernard Patrick",
        image: Beach,
        alt: "sky view of a beach front",
      },
      {
        id: uuid(),
        title: "Travel Health Useful Medical Information For",
        channel: "Lizzie Burton",
        image: Fruit,
        alt: "a play with an assortment of vibrant colored fruit",
      },
      {
        id: uuid(),
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: Balloons,
        alt: "hot air balloons flying above buildings",
      },
      {
        id: uuid(),
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: Hotel,
        alt: "sky view picture of a hotel resort build on top of blue water",
      },
      {
        id: uuid(),
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: Accommodation,
        alt: "a comfortable looking char beside a table with books on top",
      },
      {
        id: uuid(),
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: Cruise,
        alt: "side angle picture of a giant cruise ship on the water",
      },
      {
        id: uuid(),
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: Train,
        alt: "a train driving over a bridge along the mountain side",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Video image={this.state.mainVideo.image} alt={this.state.mainVideo.alt} duration={this.state.mainVideo.duration} />
          <div className="main__page-container">
            <div className="main__text-container">
              <Player
                key={this.state.mainVideo.id}
                title={this.state.mainVideo.title}
                description={this.state.mainVideo.description}
                channel={this.state.mainVideo.channel}
                views={this.state.mainVideo.views}
                likes={this.state.mainVideo.likes}
                timestamp={this.state.mainVideo.timestamp}
                alt={this.state.mainVideo.alt}
              />
              <Conversation />
              {this.state.mainVideo.comments.map((comment) => {
                return <Comments key={comment.id} name={comment.name} date={comment.date} comment={comment.comment} />;
              })}
            </div>
            <div className="main__next-video-container">
              <section class="next">
                <h3 class="next__title">NEXT VIDEO</h3>
                {this.state.sideVideos.map((sideVideo) => {
                  return <Next key={sideVideo.id} title={sideVideo.title} channel={sideVideo.channel} image={sideVideo.image} alt={sideVideo.alt} />;
                })}
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
