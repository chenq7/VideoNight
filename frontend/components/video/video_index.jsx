import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
import Sidebar from '../sidebar/sidebar';

class VideoIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllVideos();
  }

  render() {

    const hiddenVids = [1, 2, 3, 4].map(el => <div className="single-video hidden-video" key={el}></div>);

    const { users, videos } = this.props;
    return (
      <>

        <div className="main-container">

          < Sidebar />
          
          <div className="video-container">
            <h1>Recommended</h1>  
            <div className="video-index">
              {videos.slice(0,-1).map(video => {
                return (
                  <Link to={`/videos/${video.id}`} className="single-video" key={video.id}>
                    < VideoIndexItem video={video} key={video.id} user={users[video.author_id]}/>
                  </Link>
                );
              })}
              {hiddenVids}
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default VideoIndex;