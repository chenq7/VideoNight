import * as APIUtil from '../util/search_api_util';
import { RECEIVE_ALL_VIDEOS } from './video_actions';

const receiveSearchedVideos = data => ({
  type: RECEIVE_ALL_VIDEOS,
  data
});

export const fetchSearchedVideos = (result) => dispatch => {
  return APIUtil.fetchSearchedVideos(result).then(data => dispatch(receiveSearchedVideos(data)));
};