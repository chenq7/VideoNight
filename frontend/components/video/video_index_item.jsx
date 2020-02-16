import React from 'react';

const VideoIndexItem = (props) => {
  return (
    <>
      <img src={props.video.thumbnailUrl} className="thumbnail"/>
      <div className="video-info">
        <img src={window.user} className="user-icon" />
        <span>{props.video.title}</span>
      </div>
    </>
  )
}

export default VideoIndexItem;