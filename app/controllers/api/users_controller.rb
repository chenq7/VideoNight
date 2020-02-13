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

  def valid_user?
    @user = User.find_by(username: params[:valid_user][:valid_user])
    if @user
      render json: {valid_user: true}
    else
      render json: {valid_user: false}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
