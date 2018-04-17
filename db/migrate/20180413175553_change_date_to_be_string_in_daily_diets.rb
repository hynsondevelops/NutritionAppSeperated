class ChangeDateToBeStringInDailyDiets < ActiveRecord::Migration[5.0]
  def change
   	change_column :daily_diets, :date, :string
  end
end
