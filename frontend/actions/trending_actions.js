import * as APIUtil from '../util/trending_api_util';
import { RECEIVE_ALL_VIDEOS } from './video_actions';

const receiveTrendingVideos = (data) => ({
  type: RECEIVE_ALL_VIDEOS,
  data
});

export const fetchTrendingVideos = () => dispatch => {
  return APIUtil.fetchTrendingVideos().then(data => dispatch(receiveTrendingVideos(data)));
};