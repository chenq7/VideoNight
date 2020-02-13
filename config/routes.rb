Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] 
    get '/valid_user', to: 'users#valid_user?'
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"

end


