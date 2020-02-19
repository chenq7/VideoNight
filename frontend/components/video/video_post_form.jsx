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
          <h2>Upload Video</h2>
          <img src={window.x} onClick={closeModal}/>
        </div>
      </div>
    );
  }
}

export default VideoPost;