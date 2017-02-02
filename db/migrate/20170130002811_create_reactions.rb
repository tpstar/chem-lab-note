class CreateReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reactions do |t|
      t.string :title
      t.date :data
      t.integer :user_id

      t.timestamps
    end
  end
end
