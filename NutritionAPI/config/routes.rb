Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope 'api/' do
  	resources :foods
  	resources :daily_diets
  	resources :food_portions
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
