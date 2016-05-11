class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_author

  def current_author
    @author ||= Author.find_by_session_token(session[:token])
  end

  def logged_in?
    !!current_author
  end

  def login!(author)
    author.reset_sesssion_token!
    session[:token] = author.session_token
  end

  def logout!
    current_author.reset_sesssion_token!
    session[:token] = nil;
  end

  def author_params
    params.permit(:username, :password, :email, :fullname, :bio)
  end

end
