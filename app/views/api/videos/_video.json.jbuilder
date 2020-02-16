json.extract! video, :id, :title, :description, :view_count, :author_id, :created_at
json.thumbnailUrl url_for(video.thumbnail)