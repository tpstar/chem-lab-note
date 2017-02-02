class Chemical < ApplicationRecord
  belongs_to :user
  has_many :chemical_reactions
  has_many :reactions, :through => :chemical_reactions
end
