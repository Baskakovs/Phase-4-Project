Rails.application.routes.draw do
  
  resources :reviews
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
    # Other routes...
    resources :books
    resources :users, only: [:create]
    resources :reviews, except: [:index, :show]
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
end
