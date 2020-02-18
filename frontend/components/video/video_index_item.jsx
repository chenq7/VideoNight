import React from 'react';

const VideoIndexItem = (props) => {
  
  let {thumbnailUrl, title, view_count} = props.video;
  const username = (props.user ? props.user.username : null);

  return (
    <div>
      <div className="thumbnail-container">
        <img src={thumbnailUrl} className="thumbnail"/>
      </div>
      <div className="video-info">
        <img src={window.user} className="user-icon" />
        <div className="video-text">
          <div>
            <span className="video-title">{title}</span>
          </div>
          <div className="video-info-block">
            <span>{username}</span>
            <span>{view_count} views</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoIndexItem;

