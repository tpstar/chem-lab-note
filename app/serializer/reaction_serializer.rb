class ReactionSerializer < ActiveModel::Serializer
  attributes :title, :date
  belongs_to :user
  has_many :chemicals
  has_one :solvent
  has_one :condition
end
