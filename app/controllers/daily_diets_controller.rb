class DailyDietsController < ApplicationController
  before_action :set_daily_diet, only: [:show, :update, :destroy]

  # GET /daily_diets
  def index
    @daily_diets = DailyDiet.all

    render json: @daily_diets
  end

  # GET /daily_diets/1
  def show
    puts("HEY")
    puts(current_admin_user)
    dateDesired = params[:date]
    #check user
    #check date increment
    if (params[:day_increment] != nil)
      dateObject = Date.strptime(params[:date], '%m/%d/%Y')
      dateDesired = (dateObject + params[:day_increment].to_i.days).strftime("%m/%d/%Y")
    end
    #query
    @daily_diet = DailyDiet.where(admin_user_id: current_admin_user.id, date: dateDesired)[0]

    if (@daily_diet != nil)
      if (current_admin_user == @daily_diet.admin_user)
        render json: @daily_diet.to_json(include: {food_portions: {include: :food}})
      else 
        render json: {error: "Log in to view your daily diet"}, status: 403
      end
    else
      @daily_diet = DailyDiet.create(admin_user_id: current_admin_user.id, date: dateDesired)
      render json: @daily_diet.to_json(include: {food_portions: {include: :food}})
    end
  end

  # POST /daily_diets
  def create
    @daily_diet = DailyDiet.new(daily_diet_params)

    if (@daily_diet.save && current_admin_user == @daily_diet.admin_user)
      render json: @daily_diet.to_json(:include => [:food_portions]), status: :created, location: @daily_diet
    else
      render json: {error: "Log in to create your daily diet"}, status: 403
    end
  end

  # PATCH/PUT /daily_diets/1
  def update
    if (current_admin_user == @daily_diet.admin_user)
      if @daily_diet.update(daily_diet_params)
        render json: @daily_diet.to_json(:include => [:food_portions])
      else
        render json: @daily_diet.errors, status: :unprocessable_entity
      end
    else 
      render json: {error: "Log in to create your daily diet"}, status: 403
    end
  end

  # DELETE /daily_diets/1
  def destroy
    @daily_diet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_daily_diet
      @daily_diet = DailyDiet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def daily_diet_params
      params.require(:daily_diet).permit(:date, :admin_user_id)
    end
end
