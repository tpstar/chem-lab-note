class Reaction < ApplicationRecord

  validates :title, presence: true

  belongs_to :user
  has_many :reaction_chemicals
  has_many :chemicals, :through => :reaction_chemicals

  def chemicals=(chemical_attributes)
    binding.pry
    chemical_attributes.values.each do |chemical_attribute|
      chemical = Chemical.find(chemical_attribute)
      self.chemicals << chemical
    end
  end

  def chemAmt=(reaction_chemical_attributes)
    chem_amt_attributes.values.each do |reaction_chemical_attribute|
      reaction_chemical = ReactionChemical.find(reaction_chemical_attribute)
      self.reaction_chemicals << reaction_chemical
    end
  end

end
