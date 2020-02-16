import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getAllVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = (state, ownProps) => {
  return  {
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllVideos: () => dispatch(getAllVideos()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);