class Reaction < ApplicationRecord

  validates :title, presence: true

  belongs_to :user
  has_many :quantities
  has_many :reaction_chemicals
  has_many :chemicals, :through => :reaction_chemicals

  def chemicals=(chemical_attributes)
    chemical_attributes.each do |chemical_attribute|
      chemical = Chemical.find(chemical_attribute[:id])
      self.chemicals << chemical
    end
  end

  def quantities=(quantity_attributes)
    # reaction_chemical_attributes.each_with_index do |reaction_chemical_attribute, index|
    #   reaction_chemical = Quantity.new(reaction_chemical_attribute)
    #   self.quantities[index] = reaction_chemical
    #   binding.pry
    # end
    quantity_attributes.each do |quantity_attribute|
      # binding.pry
      quantity = Quantity.create(quantity_attribute)
      self.quantities << quantity
    end
  end

end
