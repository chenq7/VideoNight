import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getAllVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = (state, ownProps) => {
  
  return  {
    videos: Object.values(state.entities.videos),
    users: state.entities.videos.users
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);