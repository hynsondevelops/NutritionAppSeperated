require 'test_helper'

class FoodPortionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @food_portion = create(:food_portion)
  end

  test "should get index" do
    get food_portions_url, as: :json
    assert_response :success
  end

  test "should create food_portion" do
    assert_difference('FoodPortion.count') do
      post food_portions_url, params: { food_portion: { daily_diet_id: @food_portion.daily_diet_id, food_id: @food_portion.food_id, quantity: @food_portion.quantity } }, as: :json
    end

    assert_response 201
  end

  test "should show food_portion" do
    get food_portion_url(@food_portion), as: :json
    assert_response :success
  end

  test "should update food_portion" do
    patch food_portion_url(@food_portion), params: { food_portion: { daily_diet_id: @food_portion.daily_diet_id, food_id: @food_portion.food_id, quantity: @food_portion.quantity } }, as: :json
    assert_response 200
  end

  test "should destroy food_portion" do
    assert_difference('FoodPortion.count', -1) do
      delete food_portion_url(@food_portion), as: :json
    end

    assert_response 204
  end
end
