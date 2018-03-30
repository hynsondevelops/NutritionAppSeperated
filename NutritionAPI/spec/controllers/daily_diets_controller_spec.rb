require 'rails_helper'

RSpec.describe DailyDietsController, type: :controller do
	before(:all) do
		@daily_diet = create(:daily_diet)
		@daily_diet_params = {id: @daily_diet.id}
	end

	describe "Method: daily_diets#show, URL: /api/daily_diets/:id" do
		#200 status code response
		it "is successful" do
			get :show, params: @daily_diet_params
			expect(response).to be_success
		end

		context "when logged out" do
			it "displays an error" do
				get :show, params: @daily_diet_params
				expect(JSON.parse(response.body)["error"]).to eq("Log in to view your daily diet")
			end
		end

		context "when logged in" do
			it "displays the correct date" do
				@request.env["devise.mapping"] = Devise.mappings[:admin]
				sign_in AdminUser.find(@daily_diet.admin_user_id)  # Using factory girl as an example
				get :show, params: @daily_diet_params
				expect(JSON.parse(response.body)["date"]).to eq(@daily_diet.date)
			end

			it "displays the correct admin user id" do
				@request.env["devise.mapping"] = Devise.mappings[:admin]
				sign_in AdminUser.find(@daily_diet.admin_user_id)  # Using factory girl as an example
				get :show, params: @daily_diet_params
				expect(JSON.parse(response.body)["admin_user_id"]).to eq(@daily_diet.admin_user_id)
			end
		end
	end

	describe "Method: daily_diets#create, URL: /api/daily_diets" do
		#200 status code response
		it "is successful" do
			post :create, params: @daily_diet_params
			expect(response).to be_success
		end

		context "when logged out" do
			it "displays an error" do
				get :show, params: @daily_diet_params
				expect(JSON.parse(response.body)["error"]).to eq("Log in to view your daily diet")
			end
		end

		context "when logged in" do
			it "displays the correct date" do
				@request.env["devise.mapping"] = Devise.mappings[:admin]
				sign_in AdminUser.find(@daily_diet.admin_user_id)  # Using factory girl as an example
				get :show, params: @daily_diet_params
				expect(JSON.parse(response.body)["date"]).to eq(@daily_diet.date)
			end

			it "displays the correct admin user id" do
				@request.env["devise.mapping"] = Devise.mappings[:admin]
				sign_in AdminUser.find(@daily_diet.admin_user_id)  # Using factory girl as an example
				get :show, params: @daily_diet_params
				expect(JSON.parse(response.body)["admin_user_id"]).to eq(@daily_diet.admin_user_id)
			end
		end

	end
end
