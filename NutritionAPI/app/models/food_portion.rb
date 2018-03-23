class FoodPortion < ApplicationRecord
	belongs_to :food
	belongs_to :daily_diet
end
