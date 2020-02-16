import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
import Header from '../header/header';
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
        < Header currentUser={this.props.currentUser} logout={this.props.logout}/>

        < Sidebar />
        
        <div className="video-container">

          <h1>Recommended</h1>  
        
          <ul className="video-index">
            {this.props.videos.slice(0,-1).map(video => {
              return (
                <li key={video.id}>
                  < VideoIndexItem video={video} />
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

}

export default VideoIndex;