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
    return (
      <>

        <div className="main-container">

          < Sidebar />
          
          <div className="video-container">
            <h1>Recommended</h1>  
            <div className="video-index">
              {this.props.videos.slice(0,-1).map(video => {
                return (
                  <Link to={`/videos/${video.id}`} className="single-video" key={video.id}>
                    < VideoIndexItem video={video} key={video.id} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default VideoIndex;