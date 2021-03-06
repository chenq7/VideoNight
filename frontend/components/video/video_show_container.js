import { connect } from 'react-redux';
import VideoShow from './video_show';
import { getVideo, getAllVideos } from '../../actions/video_actions'
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  let video = state.entities.videos[ownProps.match.params.videoId];
  let recommended = state.entities.videos.recommended ? Object.values(state.entities.videos.recommended) : [];
  let author = video && state.entities.users.user ? state.entities.users.user : null;
  return {
    currentUser: state.entities.users[state.session.id],
    video: video,
    author: author,
    recommended: recommended,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  getVideo: (videoId) => dispatch(getVideo(videoId)),
  getAllVideos: () => dispatch(getAllVideos()),
  createVideoLike: like => dispatch(createVideoLike(like)),
  deleteVideoLike: videoId => dispatch(deleteVideoLike(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);