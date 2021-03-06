import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../video/video_index_item';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.getAllVideos();
  }

  handleDelete(e, videoId) {      
    e.preventDefault();
    this.props.deleteVideo(videoId);
  }

  handleEdit(e, video) {
    e.preventDefault();
    this.props.openModal({type: 'editVideo', currentVideo: video});
  }

  render() {
    let {currentUser, videos, openModal} = this.props;
    let userIcon = (currentUser && currentUser.username === "Demo user" ? (
      <img src={window.user_icon} className="profile-user-btn" />
    ) : (
        <button className="profile-user-btn profile-user-btn-style">
          <span>{currentUser.username[0].toUpperCase()}</span>
        </button>
    ));
    
    const hiddenVids = [1, 2, 3, 4].map(el => <div className="single-video hidden-video" key={el}></div>);
    let userVideos = [];
    for (let i = 0; i < videos.length - 1; i++) {
      if (videos[i].author_id === currentUser.id) {
        userVideos.push(videos[i])
      }
    }
    
    return (
    <div className="main-container">
        <div className={`profile-container ${this.props.sidebar.show ? "video-container-extend" : ""}`}>
        <img src={window.profile_background} className="profile-background-container"/>
        <div className="user-profile-container">
            {userIcon}
            <span className="user-profile-name">{currentUser.username}</span>
            <button className="edit-video-btn video-upload-margin" onClick={() => openModal({ type: 'postVideo' })}>Upload Video</button>
        </div>
        <div className="user-profile-upload-container">
          <span className="user-profile-title">Uploads</span>
          <div className="video-index video-profile-index">
            {userVideos.map(video => {
              return (
                <div className="single-video-container">
                  <div>
                    < VideoIndexItem video={video} key={video.id} user={currentUser.username} />
                  </div>
                  <div className="edit-video-div">
                    <button className="edit-video-btn" onClick={(e) => this.handleEdit(e, video)}>Edit</button>
                    <button className="edit-video-btn" onClick={(e) => this.handleDelete(e, video.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
            {hiddenVids}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default UserProfile