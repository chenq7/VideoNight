import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments, deleteComment } from '../../actions/comment_actions';
import { createCommentLike, deleteCommentLike } from '../../actions/like_actions';

const mapStateToProps = state => {
  return {
    comments: Object.values(state.entities.comments),
    users: state.entities.users,
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllComments: (videoId) => dispatch(fetchAllComments(videoId)),
  removeComment: (commentId) => dispatch(deleteComment(commentId)),
  createCommentLike: (like) => dispatch(createCommentLike(like)),
  deleteCommentLike: (commentId) => dispatch(deleteCommentLike(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);