class DailyDiet < ApplicationRecord
	belongs_to :admin_user
	has_many :food_portions
	scope :date, -> (date) { where("date like ?", "#{date}%")}

end
