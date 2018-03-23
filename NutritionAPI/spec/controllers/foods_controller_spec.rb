require 'rails_helper'


RSpec.describe FoodsController, type: :controller do
	before(:all) do
		@food = create(:food)
	  end
	it "displays name and data" do
		print(@food)
	end
end
