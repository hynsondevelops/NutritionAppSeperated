require 'test_helper'

class DailyDietsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @daily_diet = daily_diets(:one)
  end

  test "should get index" do
    get daily_diets_url, as: :json
    assert_response :success
  end

  test "should create daily_diet" do
    assert_difference('DailyDiet.count') do
      post daily_diets_url, params: { daily_diet: { admin_user_id: @daily_diet.admin_user_id, date: @daily_diet.date } }, as: :json
    end

    assert_response 201
  end

  test "should show daily_diet" do
    get daily_diet_url(@daily_diet), as: :json
    assert_response :success
  end

  test "should update daily_diet" do
    patch daily_diet_url(@daily_diet), params: { daily_diet: { admin_user_id: @daily_diet.admin_user_id, date: @daily_diet.date } }, as: :json
    assert_response 200
  end

  test "should destroy daily_diet" do
    assert_difference('DailyDiet.count', -1) do
      delete daily_diet_url(@daily_diet), as: :json
    end

    assert_response 204
  end
end
