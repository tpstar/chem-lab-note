class Reaction < ApplicationRecord

  validates :title, presence: true

  belongs_to :user
  has_many :chemical_reactions
  has_many :chemicals, :through => :chemical_reactions
  has_one :solvent
end
