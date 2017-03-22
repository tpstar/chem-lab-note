class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :solvent_vol, :time, :temp
  belongs_to :user
  has_many :chemicals
  has_one :solvent
end
