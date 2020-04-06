json.comment do
  json.partial! 'comment', comment: @comment
  json.num_likes @comment.num_likes
  if @like
    json.like do
      json.extract! @like, :id, :is_liked
    end
  else
    json.like @like
  end
end

json.video do
  json.id @video.id
  json.num_comments @num_comments
end

json.user do
  json.partial! "api/users/user", user: @comment.user
end