class ReactionChemical < ApplicationRecord
  belongs_to :reaction
  belongs_to :chemical
  
end
