Rails.application.routes.draw do

  namespace :api, defaults: {format: :json}  do
    resources :authors, except: [:index, :destroy, :edit]
    resource :session, except: [:edit]
    resources :articles, except: [:new, :edit]
  end



  root to: "static_pages#root"

end
