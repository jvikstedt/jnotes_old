class Api::V1::UsersController < Api::V1::BaseController
  skip_before_action :authenticate_user, only: [:create]

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
