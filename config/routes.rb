Rails.application.routes.draw do

  namespace :api, defaults: {format: :json}  do
    resources :authors, except: [:index]
    resource :session
    resources :articles
  end



  root to: "static_pages#root"

end
