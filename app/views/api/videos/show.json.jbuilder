json.video do 
  json.partial! 'video', video: @video
end

json.user do
  json.partial! "api/users/user", user: @video.uploader
end