class Api::ArticlesController < ApplicationController

  def index
    @articles = Article.all.order(created_at: :desc)
  end

  def create
  end

  def new
  end

  def edit
  end

  def show
    @article = Article.find_by_id(params[:id])
  end

  def update
  end

  def destroy
  end

end
