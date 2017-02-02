class CreateSolvents < ActiveRecord::Migration[5.0]
  def change
    create_table :solvents do |t|
      t.string :name
      t.integer :bp
      t.float :mL
      t.integer :reaction_id

      t.timestamps
    end
  end
end
