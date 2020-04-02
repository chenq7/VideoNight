import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const createVideoLike = like => dispatch => {
  return APIUtil.createVideoLike(like).then(result => dispatch(receiveLike(result)));
};

export const deleteVideoLike = videoId => dispatch => {
  return APIUtil.deleteVideoLike(videoId).then(result => dispatch(receiveLike(result)));
};

// export const createCommentLike = like => dispatch => {
//   return APIUtil.createCommentLike(like).then(result => dispatch(receiveLike(result)));
// };

// export const deleteCommentLike = commentId => dispatch => {
//   return APIUtil.deleteCommentLike(commentId).then(result => dispatch(receiveLike(result)));
// };