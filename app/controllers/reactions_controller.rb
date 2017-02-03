class ReactionsController < ApplicationController
  # before_action :find_reaction, except: [:index, :create]

  def index
    reactions = Reaction.all
    render json: reactions, status: 201
  end

  def create
    @reaction = Reaction.find_or_create_by(title: reaction_params[:title])
    @reaction.update_attributes(reaction_params)
    # if request.headers["Profile-Type"] == "watchlist"
    #   render json: Reaction.where(watchlist: true)
    # else
    #   render json: Reaction.where(timeline: true)
    # end
  end

  def show
    reaction = Reaction.find(params[:id])
    render json: reaction
  end

  def destroy
    # if @reaction.destroy
    #   render json: { message: "#{@reaction.title} was successfully removed" }
    # else
    #   render json: { error: "There was an issue removing #{@reaction.title}"}
    # end
  end

  private

  def reaction_params
    params.require(:reaction).permit(:title, :date, :chemical_attributes => [:name, :formula, :fw, :density, :eq, :g, :mL, :mol, :mp, :bp])
  end

  # def find_reaction
  #   @reaction = Reaction.find_by_id(params[:id])
  # end
end
