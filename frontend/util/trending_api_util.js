export const fetchTrendingVideos = () => {
  return $.ajax({
    method: "GET",
    url: "/api/trending"
  });
};