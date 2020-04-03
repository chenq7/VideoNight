import React from 'react';
import { Link } from 'react-router-dom';
import RecommendedItem from './recommended_item';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {recommended: null};
    this.getAuthor = this.getAuthor.bind(this);
    this.createLike = this.createLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount(){
    this.props.getVideo(this.props.match.params.videoId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.getVideo(this.props.match.params.videoId);
      window.location.reload();
    }
  }

  getAuthor(video){
    if (this.props.users){
      return this.props.users[video.author_id].username;
    }
    else {
      return null;
    }
  }

  createLike(is_liked){
    let newLike = { is_liked, likeable_id: this.props.video.id, likeable_type: "Video"};
    this.props.createVideoLike(newLike);
  }

  handleLike(e, is_liked){
    e.preventDefault();
    if (!this.props.currentUser){
      this.props.history.push('/login');
      return
    }
    if (this.props.video.like){
      if (is_liked === this.props.video.like.is_liked){
        this.props.deleteVideoLike(this.props.video.id);
      }
      else {
        this.props.deleteVideoLike(this.props.video.id).then(() => this.createLike(is_liked));
      }
    }
    else {
      this.createLike(is_liked);
    }
  }

  render() { 
    const { video, recommended, author, users } = this.props;
    if (!video || !video.videoUrl) return null;
    const user_icon = <img src={window.user} margin-right="16px" />
    const authorName = (author ? author.username : null);
    let first_recommended_video = null;
    if (recommended){ 
      const first_vid = recommended[0];
      if (first_vid){
        first_recommended_video = (
          <Link to={`/videos/${first_vid.id}`} key={first_vid.id}>
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
          </Link>); 
      }
    }

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
                <div className={`video-show-info-right ${video.like ? "show-blue-container" : "" }`}>
                  <img src={window.like} className={`like-icon ${video.like && video.like.is_liked ? "show-blue-image" : ""}`} 
                  onClick={(e) => this.handleLike(e, true)}/>
                  <span className={video.like && video.like.is_liked ? "show-blue-image" : ""}>{video.num_likes.true}</span>
                  <img src={window.like} className={`like-icon rotated ${video.like && !video.like.is_liked ? "show-blue-image" : ""}`} 
                  onClick={(e) => this.handleLike(e, false)}/>
                  <span className={video.like && !video.like.is_liked ? "show-blue" : ""}>{video.num_likes.false}</span>
                </div>
              </div>
            </div>

            <div className="video-show-user-container">
              <div className="video-show-user-info">
                <div className="video-show-user-left-info">
                  <img src={window.user} />
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
                return (
                  <Link to={`/videos/${video.id}`} key={video.id}>
                    <RecommendedItem video={video} users={users} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;



