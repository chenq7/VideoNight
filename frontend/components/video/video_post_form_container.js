import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import { clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import VideoPost from './video_post_form';

const mapStateToProps = (state) => {
  return {
    video: {
      title: '',
      description: '',
      thumbnailUrl: null,
      thumbnailFile: null,
      videoUrl: null,
      videoFile: null
    },
    currentUser: state.session.id,
    errors: state.errors.video
  }
}

const mapDispatchToProps = (dispatch) => ({
  createVideo: (video) => dispatch(createVideo(video)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoPost);