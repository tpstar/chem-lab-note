class Reaction < ApplicationRecord

  validates :title, presence: true

  belongs_to :user
  has_many :reaction_chemicals
  has_many :chemicals, :through => :reaction_chemicals

  def chemicals=(chemical_attributes)
    chemical_attributes.each do |chemical_attribute|
      chemical = Chemical.find(chemical_attribute[:id])
      self.chemicals << chemical
      binding.pry
    end
  end

  def reaction_chemicals=(reaction_chemical_attributes)
    reaction_chemical_attributes.each do |reaction_chemical_attribute|
      # binding.pry
      # reaction_chemical = ReactionChemical.(reaction_chemical_attribute)
      # self.reaction_chemicals << reaction_chemical
    end
  end

end
