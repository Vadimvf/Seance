class Api::AuthorsController < ApplicationController

  def new
  end

  def create
    params.delete(:errors)
    @author = Author.new(author_params)

    if @author.save
      login!(@author)
    else
      render json: { errors: @author.errors.full_messages },
                   status: 422
    end
  end

  def show
    @author = Author.find_with_published_articles(params[:id])
    render json: {} unless @author
  end

end
