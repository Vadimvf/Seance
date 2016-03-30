Rails.application.routes.draw do

  namespace :api, defaults: {format: :json}  do
    resources :authors, except: [:index]
    resource :session, only: [:new, :create, :destroygit ]
  end



  root "static_pages#root"

end
