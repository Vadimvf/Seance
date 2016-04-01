class Api::AuthorsController < ApplicationController

  def new

  end

  def create
    @author = Author.save(author_params)
  end


  private

  def author_params
    params.require(:author).permit(:username, :fullname, :password)
  end

end
