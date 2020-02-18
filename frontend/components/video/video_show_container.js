import { connect } from 'react-redux';

import VideoShow from './video_show';
import { getVideo, getAllVideos } from '../../actions/video_actions'

const mapStateToProps = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const video = state.entities.videos[videoId];
  const author = ( video && video.user ? video.user : null);
  const recommended = Object.assign({}, state.entities.videos);
  delete recommended[videoId];

  return {
    video: video,
    author: author,
    recommended: recommended,
    currentUser: state.session.id
    // users: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => ({
  getVideo: (videoId) => dispatch(getVideo(videoId)),
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);