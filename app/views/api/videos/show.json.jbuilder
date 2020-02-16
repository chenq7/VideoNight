json.video do 
  json.partial! 'video', video: @video
  json.videoUrl url_for(@video.video)
end

json.user do
  json.partial! "api/users/user", user: @video.author
end