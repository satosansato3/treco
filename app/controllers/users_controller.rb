class UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    
    # TODO:競技ごとにリクエスト投げるのではなく、まとめて1回リクエストして、
    #そのあと別々に切り取る
    @monthly_record = @user.microposts.where({ month: Time.current.month, 
    year: Time.current.year })
  end
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render new
    end
  end
  
  private
  
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
  
end
