class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def valid_email?
    @user = User.find_by(email: params[:valid_email][:valid_email])
    if @user
      render json: {valid_email: true, username: @user.username }
    else
      render json: {valid_email: false}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
