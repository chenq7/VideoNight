import React from 'react';
import getDate from '../../util/date_util';

const VideoIndexItem = (props) => {
  
  let {thumbnailUrl, title, view_count, created_at} = props.video;
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
            <div>
              <span>{view_count} views </span>
              <span>{" \u2022 "}</span>
              <span>{getDate(created_at)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoIndexItem;

