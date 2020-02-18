json.video do 
  json.partial! 'video', video: @video
  json.videoUrl url_for(@video.video)
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