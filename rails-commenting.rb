# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1 Methods housed inside the BlogPosts controller. Index is the resftul route that will call the index method to get/access all the items in the database.
class BlogPostsController < ApplicationController
  def index
    # ---2) Making an active record call that will save all the content from the database as an @posts instance variable. @posts will hold the array of all instances.
    @posts = BlogPost.all
  end

  def show
    # ---3) Have our function find/look for 1 specific Blogpost data item, by accessing the id of the item (passing in a params with a variable id). We are making an Active Record call that will find one item by id. The id will come from the url params.
    @post = BlogPost.find(params[:id])
  end

  # ---4) Create and display a new form for the user, that will hold what we will later populate. We want our users to add info to our app, that then gets stored in the database.
  def new
    @post = Post.new
  end

  def create
    # ---5) Create a RESTful route that submits user data to the database. Pass in the params. Verify whether the object is valid using the valid? method. Return true if no errors were found in the object (redirect with the @post parameter passed), and false otherwise (redirect to given internal route, path).
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Edit - Provide a view to submit specific data, by accessing the id of the item we need to edit. Find the item by id. Update - Modify the item in the database, by accessing the id of the item we need to update/modify. Find the item by id.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Verify whether the object is valid using the valid? method. Return true if no errors were found in the object (redirect with the @post parameter passed), and false otherwise (redirect to given internal route, path).
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8 The browser will redirect to the parameter passed. @post is storing the location that will be found in the hash key on the Blogpost database.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Anything below the keyword private cannot be accessed outside the scope of this class. Restricts the scope of where this method can be called.
  private
  def blog_post_params
    # ---10) Create strong params method and create restrictions so only certain params can be called from the outside. Post only to the blog_post table, can only be called in this method. (note to self: strong params only meant to be used as arguments to controller methods but we can list them as private to the controller class) Require the attribute :blog_post to be present in the create or update methods. Permit :title and :content to be present, but if they are not present, it's still ok.
    params.require(:blog_post).permit(:title, :content)
  end
end
