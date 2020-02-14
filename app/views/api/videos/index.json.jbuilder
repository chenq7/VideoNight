@videos.each do |video|
  json.videos do 
    json.set! video.id do
      json.partial! 'video', video: video
    end
  end

  json.users do 
    json.set! video.author_id do 
      json.partial! "api/users/user", user: video.author
    end
  end
end