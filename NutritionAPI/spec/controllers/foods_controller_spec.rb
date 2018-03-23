require 'rails_helper'


RSpec.describe FoodsController, type: :controller do
	before(:all) do
		@food = create(:food)
		@food_params = {id: @food.id}
	end

	describe "Method: foods#show, URL: /api/foods/:id" do
		#200 status code response
		it "is successful" do
			get :show, params: @food_params
			expect(response).to be_success
		end

		it "displays the correct name" do
			get :show, params: @food_params
			expect(JSON.parse(response.body)["name"]).to eq(@food.name)
		end

		it "displays the correct data" do
			get :show, params: @food_params
			expect(JSON.parse(response.body)["data"]).to eq(@food.data)
		end
	end
end
