class CreateReactionChemicals < ActiveRecord::Migration[5.0]
  def change
    create_table :reaction_chemicals do |t|
      t.references :chemical, foreign_key: true
      t.references :reaction, foreign_key: true
    end
  end
end
