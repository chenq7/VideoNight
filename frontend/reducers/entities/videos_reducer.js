import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from '../../actions/video_actions';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos || {};
    case RECEIVE_VIDEO:
      if (!action.video) return state;
      return Object.assign(newState, { [action.video.id]: action.video })
    default:
      return state;
  }
};

export default videosReducer;
