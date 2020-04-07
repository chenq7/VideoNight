import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, DELETE_VIDEO } from '../../actions/video_actions';
import { RECEIVE_LIKE } from "../../actions/like_actions";
import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT } from "../../actions/comment_actions";

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos || {};
    case RECEIVE_VIDEO:
      newState = Object.assign({}, state, { recommended: action.data.videos });
      newState[action.data.video.id] = Object.assign({}, newState[action.data.video.id], action.data.video);
      return newState;
    case DELETE_VIDEO:
      newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState;
    case RECEIVE_LIKE:
      newState = Object.assign({}, state);
      newState[action.like.video.id] = Object.assign({}, newState[action.like.video.id], action.like.video);
      return newState
    case RECEIVE_ALL_COMMENTS:
      if (!action.data.video) return state;
      newState = Object.assign({}, state);
      newState[action.data.video.id] = Object.assign({}, newState[action.data.video.id], action.data.video);
      return newState;
    case RECEIVE_COMMENT:
      newState = Object.assign({}, state);
      newState[action.data.video.id] = Object.assign({}, newState[action.data.video.id], action.data.video);
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      newState[action.data.video.id] = Object.assign({}, newState[action.data.video.id], action.data.video);
      return newState;
    default:
      return state;
  }
};

export default videosReducer;
