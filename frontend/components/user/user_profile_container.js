import { connect } from 'react-redux';
import { getAllVideos, deleteVideo } from '../../actions/video_actions';
import { openModal } from '../../actions/modal_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    sidebar: state.ui.sidebar
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllVideos: () => dispatch(getAllVideos()),
  deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  openModal: (type) => dispatch(openModal(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);