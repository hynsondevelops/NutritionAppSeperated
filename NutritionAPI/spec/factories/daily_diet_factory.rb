FactoryBot.define do
	factory :daily_diet do
		association :admin_user
		date "March 23, 2018"
	end
end