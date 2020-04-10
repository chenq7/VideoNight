import { connect } from 'react-redux';
import Trending from './trending';
import { fetchTrendingVideos } from '../../actions/trending_actions';

const mapStateToProps = state => {
  debugger
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    sidebar: state.ui.sidebar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrendingVideos: () => dispatch(fetchTrendingVideos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);