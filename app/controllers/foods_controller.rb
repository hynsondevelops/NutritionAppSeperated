class FoodsController < ApiController
  before_action :set_food, only: [:show, :update, :destroy]

  # GET /foods
  def index
    @foods = Food.all

    render json: @foods
  end

  # GET /foods/1
  def show
    render json: @food
  end

  # POST /foods
  def create
    @food = Food.new(name: params[:name], data: JSON.parse(params[:data].to_s.gsub('=>', ':')))
    if @food.save
      render json: @food, status: :created, location: @food
    else
      @food = Food.find_by(name: params[:name])
      render json: @food
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(name: params[:name], data: params[:data])
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
    end

    
end
