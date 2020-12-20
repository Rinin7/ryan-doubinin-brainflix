import React from "react";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";

function Upload() {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__thumbnail-container">
        <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3>
        <img className="upload__thumbnail" src={Thumbnail} alt="perspective of a bike rider looking down at their blue bike" />
      </div>
      <form className="upload__form">
        <label className="upload__form-title" for="title">
          TITLE YOUR VIDEO
        </label>
        <textarea className="upload__form-title-input" id="upload__title-input" type="text" name="title" placeholder="Add a title to your video" required />
        <label className="upload__form-description" for="description">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea className="upload__form-description-input" id="upload__description-input" type="text" name="description" placeholder="Add a description of your video" />
        <div className="upload__button-container">
          <button className="upload__button-publish" type="submit">
            PUBLISH
          </button>
          <button className="upload__button-cancel">CANCEL</button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
