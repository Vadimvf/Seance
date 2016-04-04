class Api::SessionsController < ApplicationController

  def new

  end

  def create
    params.delete(:errors)
    debugger
    # author = Author.(params)
    # login!(author)
  end

  def destroy
  end

end
