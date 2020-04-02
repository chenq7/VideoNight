import { connect } from 'react-redux';
import VideoShow from './video_show';
import { getVideo, getAllVideos } from '../../actions/video_actions'
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {

  let video = null;
  let author = null;
  let users = null;
  let recommended = null;

  if (state.entities.videos && state.entities.videos.video){
    video = state.entities.videos.video.video;
    author = state.entities.videos.video.user;
    users = state.entities.videos.video.users;
    recommended = Object.values(state.entities.videos.video.videos);
  }

  return {
    video: video,
    author: author,
    recommended: recommended,
    currentUser: state.session.id,
    users: users
  };
};

const mapDispatchToProps = dispatch => ({
  getVideo: (videoId) => dispatch(getVideo(videoId)),
  getAllVideos: () => dispatch(getAllVideos()),
  createVideoLike: like => dispatch(createVideoLike(like)),
  deleteVideoLike: videoId => dispatch(deleteVideoLike(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);