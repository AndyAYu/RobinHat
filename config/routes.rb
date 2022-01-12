Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update, :show] do 
      resources :stocks, only: [:create, :index, :destroy]
    end
    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
