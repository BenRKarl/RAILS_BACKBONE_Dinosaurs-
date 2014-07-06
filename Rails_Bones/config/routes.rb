Rails.application.routes.draw do
  resources :dinos, except: [:new, :edit]
  resources :bones, except: [:new, :edit]
end
