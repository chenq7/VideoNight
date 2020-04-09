import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchedVideos } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    sidebar: state.ui.sidebar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchedVideos: (result) => dispatch(fetchSearchedVideos(result))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);