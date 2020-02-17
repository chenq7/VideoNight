import React from 'react';
import Link from 'react-router-dom';

const VideoIndexItem = (props) => {
  return (
    <div>
      <div className="thumbnail-container">
        <img src={props.video.thumbnailUrl} className="thumbnail"/>
      </div>
      <div className="video-info">
        <img src={window.user} className="user-icon" />
        <div className="video-text">
          <span>{props.video.title}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoIndexItem;

/* <Link to={`/videos/${props.video.id}`} className="thumbnail-container">
  <img src={props.video.thumbnailUrl} className="thumbnail" />
</Link>  */