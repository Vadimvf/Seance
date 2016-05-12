class Api::ArticlesController < ApplicationController
  impressionist actions: [:show], unique: [:session_hash]

  def index
    if params[:query][:authorId]
      @articles = Article.all
        .where(
                published: params[:query][:published],
                author_id: params[:query][:authorId]
              )
        .order(created_at: :desc)
        .includes(:author)
        .limit(20)
    elsif params[:query][:impressionable] == "true"
      @articles = Article.joins(:impressions)
        .group("articles.id")
        .order("count(impressions.id) DESC")
        .limit(20)
    else
      @articles = Article.all
        .where(published: params[:query][:published])
        .order(created_at: :desc)
        .includes(:author)
        .limit(20)
      end
  end

  def create
    author = Author.find(params[:author][:id])
    @article = author.articles.create(article_params)
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
    article = Article.find(params[:id])
    article.destroy
    render json: {}
  end

  private

  def article_params
    params.permit(:title, :body, :published)
  end

end
