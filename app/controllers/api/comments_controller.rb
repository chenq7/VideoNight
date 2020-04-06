class Api::CommentsController < ApplicationController

  def index
    @video = Video.find(params[:video_id])
    @comments = @video.comments.includes(:user, :likes)
    @num_comments = @video.comments.count
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      @video = Video.find(@comment.video_id)
      @num_comments = @video.comments.count
      @like = @comment.likes.find_by(user_id: current_user.id)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def create_like
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      @comment = Comment.find(@like.likeable_id)
      @video = Video.find(@comment.video_id)
      @num_comments = @video.comments.count
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update(comment_params)
      @video = Video.find(@comment.video_id)
      @num_comments = @video.comments.count
      @like = @comment.likes.find_by(user_id: current_user.id)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    @video = Video.find(@comment.video_id)
    @num_comments = @video.comments.count
    render :show
  end

  def destroy_like
    @like = Like.find_by(user_id: current_user.id, likeable_id: params[:comment_id], likeable_type: "Comment")
    @like.destroy
    @comment = Comment.find(@like.likeable_id)
    @video = Video.find(@comment.video_id)
    @num_comments = @video.comments.count
    @like = nil
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :video_id)
  end

  def like_params
    params.require(:like).permit(:is_liked, :likeable_id, :likeable_type)
  end
end