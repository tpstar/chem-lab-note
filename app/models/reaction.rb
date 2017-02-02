class Reaction < ApplicationRecord
  belongs_to :user
  has_many :chemical_reactions
  has_many :chemicals, :through => :chemical_reactions
  has_many :conditions
  has_many :solvents
end
