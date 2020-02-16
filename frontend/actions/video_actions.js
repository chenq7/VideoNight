import * as APIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const receiveAllVideos = (videos) => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

export const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video
});

export const getAllVideos = () => dispatch => {
  return APIUtil.fetchAllVideos().then(videos => dispatch(receiveAllVideos(videos)))
};

export const getVideo = (videoId) => dispatch => {
  return APIUtil.fetchVideo(videoId).then(video => dispatch(receiveVideo(video)))
};