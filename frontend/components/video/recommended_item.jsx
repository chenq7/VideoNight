import React from 'react';
import { Link } from 'react-router-dom';

export default ({video, users}) => {

  const author = (users ? users[video.author_id].username : null);

  return (
    <Link to={`/videos/${video.id}`} key={video.id}>
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
    </Link>
  );
}

/*<Link to={`/videos/${video.id}`} key={video.id}> </Link> */