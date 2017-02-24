Rails.application.routes.draw do

  devise_for :users #, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  namespace :api do
    resources :reactions, :chemicals
  end

  # root 'api/reactions#index'

  root 'application#angular_home'

  # get '*unmatched_route', :to => 'reactions#index'
end
