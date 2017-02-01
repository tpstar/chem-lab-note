class CreateChemicals < ActiveRecord::Migration[5.0]
  def change
    create_table :chemicals do |t|
      t.string :name
      t.string :formula
      t.float :fw
      t.float :density
      t.float :eq
      t.float :g
      t.float :mL
      t.float :mol
      t.float :mp
      t.float :bp

      t.timestamps
    end
  end
end
