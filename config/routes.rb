Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # get 'users/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :reactions, :users
  root 'reactions#index'
end
