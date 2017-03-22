class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :temp
  belongs_to :user
  has_many :chemicals
  has_many :chemical_reactions

end
