class Api::SessionsController < ApplicationController

  def show
    if logged_in?
      @author = current_author
    else
      render json: { errors: "Not logged in" }, status: 401
    end
  end

  def create
    params.delete(:errors)
    @author = Author.find_by_credentials(params[:username],
                                        params[:password])
    if @author
      login!(@author)
      render :show
    else
      render json: { errors: "Invalid username or password"},
                   status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end

end
