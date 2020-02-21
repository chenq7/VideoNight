import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoPost extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.video;
    this.state.disableSubmit = false;
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleFile(e, name, url) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        [name]: file,
        [url]: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => { this.setState({ [field]: e.currentTarget.value }) };
  }

  handleSubmit(e) {
     
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    if (this.state.thumbnail) formData.append('video[thumbnail]', this.state.thumbnail);
    if (this.state.video) formData.append('video[video]', this.state.video);

    this.setState({ disableSubmit: true });
   
    this.props.createVideo(formData).then((video) => {
       
      this.props.closeModal();
      this.props.history.push(`/videos/${video.video.video.id}`);
    }, () => {
      this.setState({ disableSubmit: false });
    });

  }

  displayError(field) {
    //  
    const { errors } = this.props;
    return errors.find(error => error.includes(field));
  }

  render() {

    const { postVideo, closeModal, clearErrors, currentUser, errors } = this.props;
    const thumbnailPreview = (this.state.thumbnailUrl ? <img src={this.state.thumbnailUrl}
      className="thumbnail-preview"></img> : null);
    const videoPreview = (this.state.video ? <p>{this.state.video.name}</p> : null);
    const thumbnailContainer = (
      <div className="form-thumbnail-container">
        <h3>Thumbnail (required)</h3>
        <p>Upload a thumbnail picture for your video</p>
        <div className="form-thumbnail-input-container">
          <label className="form-thumbnail-input">
            <img src={window.thumbnail_icon}/>
            <div>Select File</div>
            <input type="file" onChange={(e) => this.handleFile(e, 'thumbnail', 'thumbnailUrl', )} multiple/>
          </label>
          <div>{thumbnailPreview}</div>
        </div>
        <span className="video-form-error">{this.displayError("Thumbnail")}</span>
      </div> );

    const uploadContainer = (
      <>
        <label htmlFor="video-upload-input" className="video-upload-container">
          <div className="video-upload-icon">
            <img src={window.upload} />
          </div>
          <p>Drag and drop a file you want to upload</p>
          <p>Your video will be public when you upload it</p>
          <input type="file" id="video-upload-input" onChange={(e) => this.handleFile(e, 'video', 'videoUrl')} multiple/>
          <div className="select-file-btn">Select File</div>
          <span className="video-form-error">{this.displayError("Video")}</span>
          {videoPreview}
        </label>
      </>
    );

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
          <form onSubmit={this.handleSubmit}>
            <div className="video-form-info">
              <div className="video-form-info-left">
                <label className="video-form-input">
                  <textarea className="video-form-title" placeholder="Add a title for your video"
                  value={this.state.title} onChange={this.update('title')} maxLength="100"></textarea>
                  <span className="title-float">Title (required)</span>
                  <span className="video-form-error">{this.displayError("Title")}</span>
                </label>
                <label className="video-form-input">
                  <textarea className="video-form-description" placeholder="Add a description for your video"
                    value={this.state.description} onChange={this.update('description')} maxLength="4000"></textarea>
                    <span className="description-float">Description (optional)</span>
                </label>
                {thumbnailContainer}
              </div>
              <div className="video-form-info-right">
                {uploadContainer}
              </div>
            </div>
            
            <button type="submit" className="upload-btn" disabled={this.state.disableSubmit}>Upload</button>
            
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoPost);