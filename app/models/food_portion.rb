class FoodPortion < ApplicationRecord
	belongs_to :food
	belongs_to :daily_diet
	validates_uniqueness_of :food_id, scope: :daily_diet_id

end
