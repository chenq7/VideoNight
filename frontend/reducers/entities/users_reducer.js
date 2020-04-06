import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from '../../actions/video_actions';
import { RECEIVE_ALL_COMMENTS } from "../../actions/comment_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_VIDEOS:
      newState = Object.assign({}, state, action.videos.users);
      return newState;
    case RECEIVE_VIDEO:
      newState = Object.assign({}, state, action.data.users);
      return newState;
    case RECEIVE_ALL_COMMENTS:
      return Object.assign({}, state, action.data.users);
    default:
      return state;
  }
};

export default usersReducer;
