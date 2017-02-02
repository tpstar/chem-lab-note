class Reaction < ApplicationRecord
  belongs_to :user
  has_many :chemicals, :through => :chemical_reactions
end
