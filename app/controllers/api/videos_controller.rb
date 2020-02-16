class Api::VideosController < ApplicationController

  def index
    @videos = Video.with_attached_video.all.includes(:author)
    render :index
  end

  def show
    @video = Video.with_attached_video.find(params[:id])
    @video.view_count += 1
    @video.save

    render :show
  end

  def create
    @video = Video.new(video_params)
    @video.author_id = current_user.id
    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = current_user.videos.find(params[:id])
    if @video.update
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = current_user.videos.find(params[:id])
    if @video.uploader_id == current_user.id
      @video.destroy
      render :show
    else
      render json: ['Can''t edit a video that isn''t yours!'], status: 422
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :view_count, :author_id)
  end

end
