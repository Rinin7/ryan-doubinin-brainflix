import "./HomePage.scss";
import React from "react";
import Video from "../Video/Video";
import Player from "../Player/Player";
import Conversation from "../Conversation/Conversation";
import Comments from "../Comments/Comments";
import Next from "../Next/Next";
import axios from "axios";

const apiUrl = "https://project-2-api.herokuapp.com/videos";
const apiKey = "?api_key=050a5321-6e92-49da-b764-c58037ab9ac4";
const endPoint = "/1af0jruup5gu";

class HomePage extends React.Component {
  state = {
    mainVideo: { comments: [{ comment: "" }] },
    sideVideos: [],
  };

  componentDidMount() {
    axios.get(`${apiUrl}${endPoint}${apiKey}`).then((res) => {
      this.setState({ mainVideo: res.data });

      // console.log(this.state.mainVideo);
    });
    axios.get(`${apiUrl}${apiKey}`).then((res) => {
      this.setState({ sideVideos: res.data });
    });
  }

  componentDidUpdate() {
    const { match } = this.props;
    axios.get(`${apiUrl}/${match.params.id}${apiKey}`).then((res) => {
      console.log(match.params);
      if (match.params.id !== this.state.mainVideo.id)
        this.setState({
          mainVideo: res.data,
        });
    });
  }

  render() {
    return (
      <>
        <main className="main">
          <Video key={this.state.mainVideo.id} videoDisplay={this.state.mainVideo} />
          <div className="main__page-container">
            <div className="main__text-container">
              <Player key={this.state.mainVideo.id} currentVideo={this.state.mainVideo} />
              <Conversation comments={this.state.mainVideo.comments} />
              {this.state.mainVideo.comments.map((comment) => {
                return <Comments key={comment.id} commentList={comment} />;
              })}
            </div>
            <div className="main__next-video-container">
              <section class="next">
                <h3 class="next__title">NEXT VIDEO</h3>
                {this.state.sideVideos
                  .filter((sideVideo) => sideVideo.id !== this.state.mainVideo.id)
                  .map((sideVideo) => (
                    <Next key={sideVideo.id} videoList={sideVideo} />
                  ))}
              </section>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default HomePage;
