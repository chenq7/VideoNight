import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
  return {
    comment: {
      body: '',
      video_id: ownProps.video.id,
      showCreateButton: false
    },
    currentUser: state.entities.users[state.session.id],
    video: ownProps.video,
    formType: "Create",
    errors: state.errors.comment
  };
};

const mapDispatchToProps = dispatch => ({
  handleComment: comment => dispatch(createComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);