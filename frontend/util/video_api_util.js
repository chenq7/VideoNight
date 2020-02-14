export const fetchAllVideos = () => (
  $.ajax({
    url: "/api/videos"
  })
);

export const fetchVideo = videoId => (
  $.ajax({
    url: `/api/videos/${videoId}`
  })
);

export const createVideo = videoForm => {
  return $.ajax({
    method: "POST",
    url: '/api/videos/',
    data: videoForm
  });
};

export const updateVideo = (videoForm, videoId) => (
  $.ajax({
    method: "PATCH",
    url: `/api/videos/${videoId}`,
    data: videoForm
  })
);

export const deleteVideo = videoId => (
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${videoId}`
  })
);