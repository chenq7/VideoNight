import React from 'react';
import getDate from '../../util/date_util';

const SearchItem = ({ video, user, history }) => {
  return (
    <main className="search-item-container pointer" onClick={() => history.push(`/videos/${video.id}`)}>
      <img src={video.thumbnailUrl} />
      <section className="search-item-info">
        <h2 className="search-video-title">{video.title}</h2>
        <div>
          <span>{user.username}</span>
          <span className="dot">{"\u2022"}</span>
          <span>{video.view_count} views</span>
          <span className="dot">{"\u2022"}</span>
          <span>{getDate(video.created_at)}</span>
        </div>
        <p>{video.description}</p>
      </section>
    </main>
  );
};

export default SearchItem;