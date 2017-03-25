class Chemical < ApplicationRecord
  belongs_to :user
  has_many :reaction_chemicals
  has_many :reactions, :through => :reaction_chemicals
end
