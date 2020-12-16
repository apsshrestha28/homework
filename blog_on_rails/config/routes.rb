Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # #index
  get('/', { to: 'posts#index', as: 'root'})
  get('/posts',{to: 'posts#index'})
  # # new
  get('/posts/new', { to: 'posts#new', as: :new_post })
  # create
  post('/posts', { to: 'posts#create' })
  #show
  get('/posts/:id', { to: 'posts#show', as: :post })
  #edit
  get('/posts/:id/edit', { to: 'posts#edit', as: :edit_post })
  #update
  patch('/posts/:id', { to: 'posts#update'})
  #delete
  delete('/posts/:id', { to: 'posts#destroy'})
  #resources :posts

  resources :posts do
    # create => post '/posts/:post_id/comments'
    resources :comments, only: [:create, :destroy]
  end
end
