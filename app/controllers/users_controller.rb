class UsersController < ApplicationController
	respond_to :json

  def new
		@user = User.new
  end

  def show
		@user = User.find( params[:id])
  end

  def create
		@user = User.new( params[:user] )
		@user.save
  end

  def destroy
		@user = User.find( params[:id] )
		@user.destroy		
  end

  def index
		@users = User.all
  end

  def edit
		@user = User.find( params[:id] )
  end

  def update
		@user = User.find( params[:id] )
		@user.update_attributes( params[:user] )
  end
end
