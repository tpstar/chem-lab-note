class CreateChemicalReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reaction_chemicals do |t|
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
