class Chemical < ApplicationRecord
  belongs_to :user
  has_many :reactions, :through => :chemical_reactions
end
