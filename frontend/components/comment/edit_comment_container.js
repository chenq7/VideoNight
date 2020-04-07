import { connect } from 'react-redux';
import CommentForm from './comment_form';
import React from 'react';
import { updateComment, deleteComment } from '../../actions/comment_actions';

class EditCommentForm extends React.Component {
  render() {
    const { comment, currentUser, errors, handleComment, deleteComment, clearErrors, toggleEditForm } = this.props;
    debugger
    if (!comment || !currentUser || comment.user_id !== currentUser.id) return null;

    return (
      <>
        <CommentForm comment={comment} currentUser={currentUser} formType="Update" errors={errors}
          handleComment={handleComment} deleteComment={deleteComment} clearErrors={clearErrors} toggleEditForm={toggleEditForm}/>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comment: state.entities.comments[ownProps.comment.id],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm);