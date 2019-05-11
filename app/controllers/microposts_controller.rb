class MicropostsController < ApplicationController
  
  def create
    @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      flash[:success] = "練習記録をつけました"
      redirect_to current_user
    end
  end
  
  private
    
    def micropost_params
      params.require(:micropost).permit(:swim, :bike, :run, :date, :year, :month, :day)
    end
end
