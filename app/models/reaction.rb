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
    self.quantities.delete_all
    quantity_attributes.each do |quantity_attribute|
      quantity = Quantity.create(quantity_attribute)
      self.quantities << quantity
    end
  end

end
