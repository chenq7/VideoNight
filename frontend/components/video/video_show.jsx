import React from 'react';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {recommended: null};
  }

  componentDidMount(){
    this.props.getVideo(this.props.match.params.videoId);
  }

  render() { 
    
    if (!this.props.video || !this.props.video.videoUrl) return null;

    return (
      <div className="video-show-container">
        <div className="video-show-container2">
          <div className="video-show-left">
            <div className="video-box">
              
              <video className="video" controls autoPlay >
                <source src={this.props.video.videoUrl} type="video/mp4" />
              </video>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;



