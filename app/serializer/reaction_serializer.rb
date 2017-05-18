class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :temp, :yield, :updated_at
  belongs_to :user
  has_many :chemicals
  has_many :quantities

end
