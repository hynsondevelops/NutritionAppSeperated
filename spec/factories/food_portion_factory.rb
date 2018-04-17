FactoryBot.define do
	factory :food_portion do
		quantity 1
		association :food
		association :daily_diet
	end
end