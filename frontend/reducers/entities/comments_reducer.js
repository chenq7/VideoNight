import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT } from "../../actions/comment_actions";
import { RECEIVE_LIKE } from "../../actions/like_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);;
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.data.comments || {};
    case RECEIVE_COMMENT:
      newState[action.data.comment.id] = Object.assign({}, action.data.comment);
      return newState;
    case RECEIVE_LIKE:
      if (!action.like.comment) return state;
      newState[action.like.comment.id] = Object.assign({}, newState[action.like.comment.id], action.like.comment);
      return newState;
    case DELETE_COMMENT:
      delete newState[action.data.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;