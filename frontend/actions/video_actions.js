import * as APIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const DELETE_VIDEO = "DELETE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveAllVideos = (videos) => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video
});

const receiveVideoErrors = ({ responseJSON }) => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors: responseJSON
})


export const getAllVideos = () => dispatch => {
  return APIUtil.fetchAllVideos().then(videos => dispatch(receiveAllVideos(videos)))
};

export const getVideo = (videoId) => dispatch => {
  return APIUtil.fetchVideo(videoId).then(video => dispatch(receiveVideo(video)))
};

export const createVideo = (videoForm) => dispatch => {
  return APIUtil.createVideo(videoForm).then(video => dispatch(receiveVideo(video), errors => dispatch(receiveVideoErrors(errors))))
};