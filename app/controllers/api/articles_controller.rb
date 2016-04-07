class Api::ArticlesController < ApplicationController

  def index
    @articles = Article.all
      .order(created_at: :desc)
      .includes(:author)
      .limit(20)
  end

  def create
    author = Author.find(params[:author][:id])
    @article = author.articles.create(article_params)
  end

  def new
  end

  def edit
  end

  def show
    @article = Article.find_by_id(params[:id])
  end

  def update
    article = Article.find(params[:id])
    article.update(article_params)
    render json: {}
  end

  def destroy
  end

  private

  def article_params
    params.permit(:title, :body)
  end

end
