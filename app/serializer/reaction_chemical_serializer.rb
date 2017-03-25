class ReactionChemicalSerializer < ApplicationRecord
  belongs_to :chemical
  belongs_to :reaction
  attributes :chemical_id, :eq, :g, :mL, :mol

end
