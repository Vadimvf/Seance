Rails.application.routes.draw do

  namespace :api, defaults: {format: :json}  do
    resources :authors, only: [:new, :create, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :articles, except: [:new, :edit]
  end



  root to: "static_pages#root"

end
