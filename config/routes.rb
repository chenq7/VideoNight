Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do

    resource :user, only: [:create] 

    get '/valid_email', to: 'users#valid_email?'

    resource :session, only: [:create, :destroy, :show]

    resources :videos, only: [:index, :show, :create, :update, :destroy]
    
  end

  root "static_pages#root"

end


