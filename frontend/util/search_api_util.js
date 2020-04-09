export const fetchSearchedVideos = (result) => {
  return $.ajax({
    method: "GET",
    url: "/api/search",
    data: { result }
  });
};