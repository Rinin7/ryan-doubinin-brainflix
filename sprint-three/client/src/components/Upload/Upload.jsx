import React from "react";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import axios from "axios";

function Upload(props) {
  const uploadSubmit = (event) => {
    event.preventDefault();

    const history = props.history;

    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value,
      image: "/static/media/Upload-video-preview.313a407c.jpg",
    };

    axios.post("http://localhost:8080/videos", newVideo).then((res) => {
      history.push(`/video/${res.data.id}`);
    });
  };

  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form" onSubmit={uploadSubmit}>
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

export default Upload;
