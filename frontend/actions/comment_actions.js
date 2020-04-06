import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveAllComments = data => ({
  type: RECEIVE_ALL_COMMENTS,
  data
});

const receiveComment = data => ({
  type: RECEIVE_COMMENT,
  data
});

const removeComment = data => ({
  type: DELETE_COMMENT,
  data
});

const receiveCommentErrors = ({ errors }) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors: errors
});

export const fetchAllComments = videoId => dispatch => {
  return APIUtil.fetchAllComments(videoId).then(data => dispatch(receiveAllComments(data)));
};

export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment).then(data => dispatch(receiveComment(data)), errors => dispatch(receiveCommentErrors(errors)));
};

export const updateComment = comment => dispatch => {
  return APIUtil.updateComment(comment).then(data => dispatch(receiveComment(data)),errors => dispatch(receiveCommentErrors(errors)));
};

export const deleteComment = commentId => dispatch => {
  return APIUtil.deleteComment(commentId).then((data) => dispatch(removeComment(data)));
};