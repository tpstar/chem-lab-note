class CreateChemicals < ActiveRecord::Migration[5.0]
  def change
    create_table :chemicals do |t|
      t.string :name
      t.string :formula
      t.float :fw
      t.float :density
      t.float :mp
      t.float :bp
      t.integer :user_id

      t.timestamps
    end
  end
end
