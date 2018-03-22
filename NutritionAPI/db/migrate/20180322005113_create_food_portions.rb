class CreateFoodPortions < ActiveRecord::Migration[5.0]
  def change
    create_table :food_portions do |t|
      t.decimal :quantity
      t.integer :food_id
      t.integer :daily_diet_id

      t.timestamps
    end
  end
end
