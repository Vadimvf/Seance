class Api::AuthorsController < ApplicationController

  def new
  end

  def create
    debugger
    params.delete(:errors)
    author = Author.new(author_params)

    if author
      login!(author)
      render json: author
    else
      render json: { message: "Invalid credentials"}, status: 401
    end
  end

end
