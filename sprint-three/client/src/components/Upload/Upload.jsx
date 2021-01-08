import React from "react";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import axios from "axios";

class Upload extends React.Component {
  state = {
    mainVideo: {},
  };

  uploadSubmit = (event) => {
    // const { title, description, image } = req.body;
    event.preventDefault();

    const { history } = this.props;

    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value,
      image: "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    };

    axios.post("http://localhost:8080/videos", newVideo).then((res) => {
      this.setState({
        mainVideo: res.data,
      });
      history.push(`/video/${res.data.id}`);
    });
  };

  render() {
    return (
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__form" onSubmit={this.uploadSubmit}>
          <div className="upload__content-container">
            <div className="upload__thumbnail-container">
              <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3>
              <img className="upload__thumbnail" src={Thumbnail} alt="perspective of a bike rider looking down at their blue bike" />
            </div>
            <div className="upload__form-input-container">
              <label className="upload__form-title" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <textarea className="upload__form-title-input" type="text" id="title" name="title" placeholder="Add a title to your video" required />
              <label className="upload__form-title" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea className="upload__form-description-input" type="text" id="description" placeholder="Add a description of your video" />
            </div>
          </div>
          <div className="upload__button-container">
            <button className="upload__button-publish" type="submit">
              PUBLISH
            </button>
            <a href="/" className="upload__link-cancel">
              CANCEL
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
