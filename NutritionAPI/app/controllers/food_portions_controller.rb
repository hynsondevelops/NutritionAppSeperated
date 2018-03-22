class FoodPortionsController < ApplicationController
  before_action :set_food_portion, only: [:show, :update, :destroy]

  # GET /food_portions
  def index
    @food_portions = FoodPortion.all

    render json: @food_portions
  end

  # GET /food_portions/1
  def show
    render json: @food_portion
  end

  # POST /food_portions
  def create
    @food_portion = FoodPortion.new(food_portion_params)

    if @food_portion.save
      render json: @food_portion, status: :created, location: @food_portion
    else
      render json: @food_portion.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /food_portions/1
  def update
    if @food_portion.update(food_portion_params)
      render json: @food_portion
    else
      render json: @food_portion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /food_portions/1
  def destroy
    @food_portion.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food_portion
      @food_portion = FoodPortion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def food_portion_params
      params.require(:food_portion).permit(:quantity, :food_id, :daily_diet_id)
    end
end
