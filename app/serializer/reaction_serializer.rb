class ReactionSerializer < ActiveModel::Serializer
  attributes :title, :date
  has_one :user
  has_many :chemicals
end
