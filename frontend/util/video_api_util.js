export const fetchAllVideos = () => {
  return $.ajax({
    url: "/api/videos"
  })
};

export const fetchVideo = videoId => {
  return $.ajax({
    url: `/api/videos/${videoId}`
  })
};

export const createVideo = videoForm => {
  return $.ajax({
    method: "POST",
    url: '/api/videos/',
    data: videoForm,
    contentType: false,
    processData: false
  });
};

export const updateVideo = (videoForm, videoId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/videos/${videoId}`,
    data: videoForm,
    contentType: false,
    processData: false
  })
};

export const deleteVideo = videoId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/videos/${videoId}`
  })
};