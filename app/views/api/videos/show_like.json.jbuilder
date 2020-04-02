json.video do
  json.partial! 'video', video: @video
  json.num_likes @num_likes
  if @like
    json.like do
      json.extract! @like, :id, :is_liked
    end
  else
    json.like @like
  end
end