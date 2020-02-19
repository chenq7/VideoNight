import React from 'react';

export default ({video, users}) => {

  const author = (users ? users[video.author_id].username : null);

  return (
    <div className="rec-video-container">
      <div className="rec-video-container2">
        <img src={video.thumbnailUrl} />
      </div>
      <div className="rec-video-info">
        <h3>{video.title}</h3>
        <p>{author}</p>
        <p>{video.view_count} views</p>
      </div>
    </div>
  );
}

/*<Link to={`/videos/${video.id}`} key={video.id}> </Link> */