class CreateConditions < ActiveRecord::Migration[5.0]
  def change
    create_table :conditions do |t|
      t.float :time
      t.integer :temp

      t.timestamps
    end
  end
end
