export const fetchAllComments = videoId => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}/comments`
  })
};

export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `/api/videos/${comment.video_id}/comments`,
    data: { comment }
  });
};

export const updateComment = comment => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
};

export const deleteComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`,
  })
};