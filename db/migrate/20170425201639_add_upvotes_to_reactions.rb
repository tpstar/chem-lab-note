class AddUpvotesToReactions < ActiveRecord::Migration[5.0]
  def change
    add_column :reactions, :upvotes, :integer
  end
end
