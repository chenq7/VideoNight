import { connect } from 'react-redux';
import { getAllVideos } from '../../actions/video_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    sidebar: state.ui.sidebar
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);