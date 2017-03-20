class Api::ChemicalsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_chemical, only: [:show, :update, :destroy]
  def index
    chemicals = Chemical.all
    render json: chemicals, status: 201
  end

  def create
    chemical = current_user.chemicals.build(chemical_params)
    if chemical.save
      render json: chemical
    else
      render json: {error: "This chemical was not created.", status: 500}, status: 500
    end
  end

  def update
    @chemical.update(chemical_params)
    if @chemical.save
      render json: @chemical
    else
      render json: {error: "This chemical was not updated.", status: 500}, status: 500
    end
  end

  def show
    if @chemical
      render json: @chemical
    else
      render json: {error: "Could not find the chemical!", status: 404}, status: 404
    end
  end

  def destroy
    @chemical.destroy
    render json: {message: "This chemical was deleted", status: 200}, status: 200
  end

  def search
    chemical = Chemical.find_by(name: params[:qchemname])
    if chemical
      render json: chemical
    else
      render json: {error: "Could not find the chemical!", status: 404}, status: 404
    end
  end

  private

  def chemical_params
    params.require(:chemical).permit(:name, :formula, :fw, :density, :mp, :bp,
                                     :reaction_attributes => [:title, :date])
  end

  def find_chemical
    @chemical = Chemical.find_by_id(params[:id])
  end

end
