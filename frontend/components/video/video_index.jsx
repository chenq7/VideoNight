import React from 'react';
import VideoIndexItem from './video_index_item';

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
          
          <div className={`video-container ${this.props.sidebar.show ? "video-container-extend" : ""}`}>
            <h1>Recommended</h1>  
            <div className="video-index">
              {videos.slice(0,-1).map(video => {
                return (
                  <VideoIndexItem video={video} key={video.id} user={users[video.author_id]}/>
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