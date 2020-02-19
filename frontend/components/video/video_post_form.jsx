import React from 'react';

class VideoPost extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.video;
  }

  render() {

    const { postVideo, closeModal, clearErrors, currentUser, errors } = this.props

    return (
      <div className="video-form-container">
        <div className="video-form-title-container">
          <h2>Upload video</h2>
          <img src={window.x} onClick={closeModal}/>
        </div>
        <div className="video-form-info-container">
          <div className="video-form-info-header">
            <h1>Details</h1>
          </div>
          <form>
            <div className="video-form-info">
              <div className="video-form-info-left">
                <label className="video-form-input">
                  <textarea className="video-form-title" placeholder="Add a title for your video"></textarea>
                </label>
                <label className="video-form-input">
                  <textarea className="video-form-description" placeholder="Add a description for your video"></textarea>
                </label>
              </div>
              <div className="video-form-info-right">
                <div className="video-upload-container">
                  <img src={window.upload}/>
                </div>
              </div>
            </div>
            <div className="video-form-submit">

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default VideoPost;