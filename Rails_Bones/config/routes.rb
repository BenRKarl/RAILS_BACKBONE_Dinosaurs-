Rails.application.routes.draw do
  resources :dinos, except: [:new, :edit, :show]
  resources :bones, except: [:new, :edit, :show]
end
