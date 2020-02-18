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
    
    const { video, currentUser, recommended, author } = this.props;
    const user_icon = <img src={window.user} margin-right="16px" />
    const authorName = (author ? author.username : null);

    if (!video || !video.videoUrl) return null;

    return (
      <div className="video-show-container">
        <div className="video-show-container2">
          <div className="video-show-left">
            <div className="video-box">
              
              <video className="video" controls autoPlay >
                <source src={video.videoUrl} type="video/mp4" />
              </video>

            </div>

            <div className="video-show-info">
              <h3>{video.title}</h3>
              <div className="video-show-info2">
                <div className="video-show-info-left">
                  <span>{video.view_count} views</span>
                </div>
              </div>
            </div>

            <div className="video-show-user-container">
              <div className="video-show-user-info">
                <div className="video-show-user-left-info">
                  <img src={window.user}/>
                  <span>{authorName}</span>
                </div>
              </div>
              <div className="video-description">
                <p>{video.description}</p>
              </div>
            </div>

            <div className="comments-container">
              <div className="add-comments-container">
                <span>0 Comments</span>
              </div>
              <div className="comment-form">
                {user_icon}
                <span>Add a public comment...</span>
              </div>
            </div>
          </div>

          <div className="video-show-right">
              <span>Up next</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;



