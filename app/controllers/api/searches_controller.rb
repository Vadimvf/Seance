class Api::SearchesController < ApplicationController

  def index
    @search_results = PgSearch.multisearch(params[:query]).limit(10)
  end

end
