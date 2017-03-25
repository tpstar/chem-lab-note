class CreateReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reactions do |t|
      t.string :title
      t.date :date
      t.float :time
      t.integer :temp
      t.float :yield
      t.integer :user_id


      t.timestamps
    end
  end
end
