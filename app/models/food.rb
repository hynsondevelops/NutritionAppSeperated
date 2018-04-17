class Food < ApplicationRecord
	has_many :food_portions
	validates_uniqueness_of :name
end
