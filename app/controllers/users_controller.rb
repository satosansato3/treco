class UsersController < ApplicationController
  before_action :logged_in_user, only: [:show]
  before_action :correct_user, only: [:show]
  
  def show
    @user = User.find(params[:id])
    @monthly_record = @user.microposts.where(date: (Time.now.beginning_of_month..
                                                    Time.now.end_of_month)).order("date DESC")
    @micropost = @user.microposts.build
    gon.swim = []
    gon.bike = []
    gon.run = []
    @monthly_record.find_each do |row|
      gon.swim << { "date" => row["date"], "swim" => row["swim"] }
      gon.bike << { "date" => row["date"], "bike" => row["bike"] }
      gon.run << { "date" => row["date"], "run" => row["run"] }
    end
    gon.swim.sort_by!{|d| d["date"]}
    gon.bike.sort_by!{|d| d["date"]}
    gon.run.sort_by!{|d| d["date"]}
  end
  
  def new
    if logged_in?
      redirect_to current_user
    else
      @user = User.new
      render layout: "home"
    end
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      redirect_to @user
    else
      render layout: "home", action: "new"
    end
  end
  
  private
  
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
    
    def logged_in_user
      unless logged_in?
        flash[:danger] = "ログインしてください"
        redirect_to login_url
      end
    end
    
    def correct_user
      @user = User.find(params[:id])
      redirect_to current_user unless current_user?(@user)
    end
end
