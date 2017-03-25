class ReactionChemical < ApplicationRecord
  belongs_to :chemical
  belongs_to :reaction
end
