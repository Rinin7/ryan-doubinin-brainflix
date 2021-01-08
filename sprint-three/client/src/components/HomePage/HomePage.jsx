import "./HomePage.scss";
import React from "react";
import Video from "../Video/Video";
import Player from "../Player/Player";
import Conversation from "../Conversation/Conversation";
import Comments from "../Comments/Comments";
import Next from "../Next/Next";
import axios from "axios";

const homePageVideoId = "1af0jruup5gu";

const apiUrl = "http://localhost:8080/videos";

class HomePage extends React.Component {
  state = {
    mainVideo: { comments: [{ comment: "", name: "" }] },
    currentVideo: undefined,
    sideVideos: [],
    newComment: "",
  };

  getVideoData(refreshCurrentVideoData) {
    const videoId = this.props.match.params.id ? this.props.match.params.id : homePageVideoId;
    console.log(this.props);

    if (refreshCurrentVideoData === true || this.state.currentVideo === undefined || this.state.currentVideo !== videoId) {
      axios.get(`${apiUrl}/${videoId}`).then((res) => {
        console.log(res.data);
        //function to sort comments in chronological order
        const sortedComments = res.data.comments.sort(function (a, b) {
          let timeA = a.timestamp;
          let timeB = b.timestamp;
          if (timeA > timeB) {
            return -1;
          }
          if (timeA < timeB) {
            return 1;
          }
          return 0;
        });

        const videoData = {
          ...res.data,
          comments: sortedComments,
        };

        this.setState({ mainVideo: videoData, currentVideo: videoId });

        if (!refreshCurrentVideoData) {
          //method that scrolls to the top of the page after clicking one of the next videos
          window.scrollTo(0, 0);
        }
      });
      axios.get(`${apiUrl}`).then((res) => {
        this.setState({ sideVideos: res.data });
      });
    }
  }

  componentDidMount() {
    this.getVideoData();
  }

  componentDidUpdate() {
    this.getVideoData();
  }

  commentSubmit = (event) => {
    const { match } = this.props;
    event.preventDefault();
    const post = {
      name: "Ryan",
      comment: this.state.newComment,
    };
    axios.post(`${apiUrl}/${match.params.id ? match.params.id : homePageVideoId}/comments/`, post).then((res) => {
      this.getVideoData(true);
    });
    this.setState({
      newComment: "",
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      newComment: event.target.value,
    });
  };

  render() {
    return (
      <main className="main">
        <Video videoDisplay={this.state.mainVideo} />
        <div className="main__page-container">
          <div className="main__text-container">
            <Player currentVideo={this.state.mainVideo} />
            <Conversation commentSubmit={this.commentSubmit} handleCommentChange={this.handleCommentChange} comments={this.state.mainVideo.comments} newComment={this.state.newComment} />
            {this.state.mainVideo.comments.map((comment, index) => {
              return <Comments key={index} commentList={comment} />;
            })}
          </div>
          <div className="main__next-video-container">
            <section className="next">
              <h3 className="next__title">NEXT VIDEO</h3>
              {this.state.sideVideos
                .filter((sideVideo) => sideVideo.id !== this.state.mainVideo.id)
                .map((sideVideo) => (
                  <Next key={sideVideo.id} videoList={sideVideo} />
                ))}
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
