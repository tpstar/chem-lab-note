class CreateQuantities < ActiveRecord::Migration[5.0]
  def change
    create_table :quantities do |t|
      t.integer :chemical_id
      t.integer :reaction_id
      t.float :eq
      t.float :g
      t.float :mL
      t.float :mol
      t.timestamps
    end
  end
end
