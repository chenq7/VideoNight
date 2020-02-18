import React from 'react';
import RecommendedItem from './recommended_item';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {recommended: null};
    this.getAuthor = this.getAuthor.bind(this);
  }

  componentDidMount(){
    this.props.getVideo(this.props.match.params.videoId);
  }

  getAuthor(video){
    if (this.props.users){
      return this.props.users[video.author_id].username;
      // return (user ? user.username : null);
    }
    else {
      return null;
    }
  }

  render() { 
    
    const { video, currentUser, recommended, author, users } = this.props;
    const user_icon = <img src={window.user} margin-right="16px" />
    const authorName = (author ? author.username : null);

    let first_recommended_video = null;
    if (recommended){ 
      const first_vid = recommended[0];
      first_recommended_video = (
      <div>
        <div className="rec-video-container">
          <div className="rec-video-container2">
            <img src={first_vid.thumbnailUrl} />
          </div>
          <div className="rec-video-info first-video">
            <h3>{first_vid.title}</h3>
            <p>{this.getAuthor(first_vid)}</p>
            <p>{first_vid.view_count} views</p>
          </div>
        </div>
      </div>); 
    }

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
            <p>Up next</p>
            {first_recommended_video}
            <div className="recommended-videos">
              {recommended.slice(1).map(video => {
                return < RecommendedItem video={video} users={users}/>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;



