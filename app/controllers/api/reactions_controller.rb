class Api::ReactionsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_reaction, only: [:show, :update, :destroy]

  def index
    reactions = Reaction.all
    render json: reactions, status: 201
  end

  def create
    binding.pry
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
    params.require(:reaction).permit(:title, :date, :time, :temp, :yield, :chemAmt => [],
      :chemicals_attributes => [:name, :formula, :fw, :density, :mp, :bp])
      # from front-end angular
      # chemAmt: Array[4]
      # chemicals: Array[4]
      # date: "2017-03-24"
      # temp: 26
      # time: 30
      # title: "neutraization"
      # yield: 73
  end

  def find_reaction
    @reaction = Reaction.find_by_id(params[:id])
  end

end

# "reaction"=><ActionController::Parameters {"chemicals"=>[{"id"=>1, "name"=>"acetic acid", "formula"=>"C2H4O2", "fw"=>60.05, "density"=>0.61, "mp"=>16, "bp"=>118, "updated_at"=>"2017-03-20T04:32:59.331Z", "user"=>{"id"=>1, "email"=>"han@email.com", "first_name"=>"Han", "last_name"=>"Lee"}, "reactions"=>[]}, {"id"=>2, "name"=>"sodium hydroxide", "formula"=>"NaOH", "fw"=>40, "density"=>2.13, "mp"=>318, "bp"=>1388, "updated_at"=>"2017-03-20T04:34:59.220Z", "user"=>{"id"=>1, "email"=>"han@email.com", "first_name"=>"Han", "last_name"=>"Lee"}, "reactions"=>[]}, {"id"=>4, "name"=>"water", "formula"=>"H2O", "fw"=>18.015, "density"=>1, "mp"=>0, "bp"=>100, "updated_at"=>"2017-03-24T02:05:28.833Z", "user"=>{"id"=>1, "email"=>"han@email.com", "first_name"=>"Han", "last_name"=>"Lee"}, "reactions"=>[]}, {"id"=>3, "name"=>"sodium chloride", "formula"=>"NaCl", "fw"=>58.44, "density"=>2.165, "mp"=>801, "bp"=>1413, "updated_at"=>"2017-03-21T21:28:06.789Z", "user"=>{"id"=>1, "email"=>"han@email.com", "first_name"=>"Han", "last_name"=>"Lee"}, "reactions"=>[]}], "chemAmt"=>[<ActionController::Parameters {"eq"=>1, "wt"=>18, "mol"=>"0.30"} permitted: false>, <ActionController::Parameters {"eq"=>1.2, "mol"=>"0.36", "wt"=>"14.4"} permitted: false>, <ActionController::Parameters {"mL"=>20} permitted: false>, <ActionController::Parameters {"wt"=>17, "mol"=>"0.29", "eq"=>"0.97"} permitted: false>], "yield"=>97, "title"=>"neutrailzation", "date"=>"2017-03-22", "temp"=>50, "time"=>30} permitted: false>, "controller"=>"api/reactions", "action"=>"create"} permitted: false>
