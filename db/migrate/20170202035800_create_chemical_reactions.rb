class CreateChemicalReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :chemical_reactions do |t|
      t.integer :chemical_id
      t.integer :reaction_id

      t.timestamps
    end
  end
end
