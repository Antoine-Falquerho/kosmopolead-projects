class PhotosController < ApplicationController
  before_filter :find_project



  def index
   @photos = @gallery.photos
   render :layout=>false
  end

  def new
    @photo = Photo.new
    @photo.gallery_id = @gallery.id
   render :layout=>false
  end

  def create
    @photo = Photo.create(params[:photo])
    respond_to do |format|
      format.html { redirect_to :action => :index,:controller=>:projects}
      format.js { render(:update) {|page| page.replace_html "photo_index", :partial => 'photos/index',:locals=>{:photos=>@gallery.photos}} }
    end
  end


private

  def find_project
    @project = Project.find(params[:project_id])
    @gallery = @project.gallery
  end

end