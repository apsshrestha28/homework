class CommentsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    @post = Post.find params[:post_id]
    @comment = Comment.new params.require(:comment).permit(:body)
    @comment.post = @post
    @comment.user = current_user
    if @comment.save
      redirect_to post_path(@post)
    else
      render 'posts/show'
    end
  end
  
  def destroy
    @comment = Comment.find params[:id] 
    if can?(:crud,@comment)
     @comment.destroy
     redirect_to post_path(@comment.post)
    else
    #  head will send an empty HTTP response  with a particular response code, in this case 
    # unauthorized 401
    # # http://billpatrianakos.me/blog/2013/10/13/list-of-rails-status-code-symbols/

      head :unauthorized
    end
  end
end
