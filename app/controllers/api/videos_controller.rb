class Api::VideosController < ApplicationController

  def index
    @videos = Video.with_attached_thumbnail.all.includes(:author)
    render :index
  end

  def show
    @video = Video.with_attached_video.find(params[:id])
    @video.view_count += 1
    @video.save

    @videos = Video.with_attached_thumbnail.all.includes(:author)
    .where.not(id: params[:id]).order(Arel.sql('random()')).limit(10)

    @num_likes = @video.num_likes
    if logged_in?
      @like = @video.likes.where(user_id: current_user.id).first
    end
    render :show
  end

  def create 
    @video = Video.new(video_params)
    @video.author_id = current_user.id
    @video.view_count = 0;
    
    if @video.save
      
      @videos = Video.with_attached_thumbnail.all.includes(:author)
      .where.not(id: params[:id]).order(Arel.sql('random()')).limit(10)

      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def create_like 
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      @video = Video.find(@like.likeable_id)
      @num_likes = @video.num_likes
      render :show_like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update
    @video = current_user.videos.find(params[:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def search
    @videos = Video.search_by_title(params[:result]).slice(0,10)
    render :index
  end

  def destroy
    @video = current_user.videos.find(params[:id])
    if @video.author_id == current_user.id
      @video.destroy
      render :show
    else
      render json: ['Can''t edit a video that isn''t yours!'], status: 422
    end
  end

  def destroy_like
    @like = Like.find_by(user_id: current_user.id, likeable_id: params[:video_id], likeable_type: "Video")
    @video = Video.find(params[:video_id])
    @like.destroy
    @num_likes = @video.num_likes
    @like = nil
    render :show_like
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :thumbnail, :video)
  end

  def like_params
    params.require(:like).permit(:is_liked, :likeable_id, :likeable_type)
  end

end
