@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.num_likes comment.num_likes
      json.partial! 'comment', comment: comment
      comment.likes.each do |like|
        if current_user && like.user_id == current_user.id
          json.like do
            json.extract! like, :id, :is_liked
          end
          break
        end
      end
    end
  end

  json.video do
    json.id @video.id
    json.num_comments @num_comments
  end

  json.users do
    json.set! comment.user_id do
      json.partial! "api/users/user", user: comment.user
    end
  end
end