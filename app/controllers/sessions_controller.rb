class SessionsController < ApplicationController
  def new
  end
  
  def create
    @login_user = User.find_by(email: params[:session][:email].downcase)
    if @login_user && @login_user.authenticate(params[:session][:password])
      log_in @login_user
      redirect_to @login_user
    else
      flash[:danger] = "メールアドレスまたはパスワードが間違っています"
      redirect_to login_url
    end
  end
  
  def destroy
    log_out
    redirect_to root_url
  end
end
