require 'rails_helper'

RSpec.describe FoodPortionsController, type: :controller do
	before(:all) do
		@food_portion = create(:food_portion)
		@food_portion_params = {id: @food_portion.id}
	end

	describe "Method: food_portions#show, URL: /api/food_portions/:id" do
		#200 status code response
		it "is successful" do
			get :show, params: @food_portion_params
			expect(response).to be_success
		end

		it "displays the correct food id" do
			get :show, params: @food_portion_params
			expect(JSON.parse(response.body)["food_id"]).to eq(@food_portion.food_id)
		end

		it "displays the correct quantity" do
			get :show, params: @food_portion_params
			expect(JSON.parse(response.body)["quantity"].to_d).to eq(@food_portion.quantity)
		end
	end
end
