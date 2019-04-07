Rails.application.routes.draw do
  get "help", to: 'static_pages#help'
  root "users#new"
  resources :users
end
