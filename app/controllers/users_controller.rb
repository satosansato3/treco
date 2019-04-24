class UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    @monthly_record = @user.microposts.where({ month: Time.current.month, 
    year: Time.current.year })
  end
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    @user.save
    redirect_to root_url
  end
  
  private
  
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
  
end
