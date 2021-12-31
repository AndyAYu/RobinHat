Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
  end
  
  root "static_pages#root"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
