class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all.order("created_at DESC") #Post is model and save data in instance varaible @posts which is accessed in index.html.erb
  end

  def new
    @post = Post.new # create instance for new post and @post is accesed in new.html.erb
  end
  
  def create
    @post=Post.new post_params
    if @post.save # save in database
      # flash is a hash that is accessible within controllers. It's also available within the views
      flash[:notice] = "Post created successfully"
      redirect_to root_path(@post)
    else
      # will render the view: views/posts/new.html.erb
      render :new
    end
  end

  def show
    @comment = Comment.new
    @comments = @post.comments
  end

  def edit
  end
  
  def update
    if @post.update post_params
      redirect_to post_path(@post)
    else
      render :edit
    end
  end
  
  def destroy
    @post.destroy
    redirect_to root_path
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

  def find_post
    @post = Post.find params[:id]
  end
end
