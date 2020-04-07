json.video do 
  json.partial! 'video', video: @video
  json.videoUrl url_for(@video.video)
  if @num_likes
    json.num_likes @num_likes
  end
  if @like
    json.like do
      json.extract! @like, :id, :is_liked
    end
  else
    json.like @like
  end
end

json.user do 
  json.partial! "api/users/user", user: @video.author
end

if @videos
  json.videos do 
    @videos.each do |video|
      json.set! video.id do 
        json.partial! 'video', video: video
      end
    end
  end

  json.users do 
    @videos.each do |video|
      json.set! video.author_id do 
        json.partial! "api/users/user", user: video.author
      end
    end
  end 
end