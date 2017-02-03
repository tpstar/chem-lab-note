class ChemicalsController < ApplicationController
  def index
    chemicals = Chemical.all
    render json: chemicals, status: 201
  end
end
