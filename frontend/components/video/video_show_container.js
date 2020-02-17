import { connect } from 'react-redux';

import VideoShow from './video_show';
import { getVideo, getAllVideos } from '../../actions/video_actions'

const mapStateToProps = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const recommended = Object.assign({}, state.entities.videos);
  delete recommended[videoId];

  return {
    video: state.entities.videos[videoId],
    videos: recommended,
    currentUser: state.session.id
    // users: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => ({
  getVideo: (videoId) => dispatch(getVideo(videoId)),
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);