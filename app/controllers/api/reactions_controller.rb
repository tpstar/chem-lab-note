class Api::ReactionsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_reaction, only: [:show, :update, :destroy]

  def index
    reactions = Reaction.all
    render json: reactions, status: 201
  end

  def create
    reaction = current_user.reactions.build(reaction_params)

    if reaction.save
      render json: reaction
    else
      render json: {error: "This reaction was not created.", status: 500}, status: 500
    end
  end

  def update
    @reaction.update(reaction_params)
    if @reaction.save
      render json: @reaction
    else
      render json: {error: "This reaction was not updated.", status: 500}, status: 500
    end
  end

  def show
    if @reaction
      render json: @reaction
    else
      render json: {error: "Could not find the reaction!", status: 404}, status: 404
    end
  end

  def destroy
    @reaction.destroy
    render json: {message: "This reaction was deleted", status: 200}, status: 200
  end

  private

  def reaction_params
    params.require(:reaction).permit(:title, :date, :time, :temp, :yield,
      :quantities => [:chemical_id, :eq, :g, :mL, :mol],
      :chemicals => [:id])
  end

  def find_reaction
    @reaction = Reaction.find_by_id(params[:id])
  end

end
