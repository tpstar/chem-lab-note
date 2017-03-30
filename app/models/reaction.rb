class Reaction < ApplicationRecord

  validates :title, presence: true

  belongs_to :user
  has_many :quantities
  has_many :reaction_chemicals
  has_many :chemicals, :through => :reaction_chemicals

  def chemicals=(chemical_attributes)
    new_ids = []
    chemical_attributes.each do |chemical_attribute|
      # self.chemicals.delete_all
      # chemical = Chemical.find(chemical_attribute[:id])
      # self.chemicals << chemical
      new_ids << chemical_attribute[:id]
    end
    self.chemical_ids = new_ids

  end
  #https://ernie.io/2010/10/02/the-underused-collection_singular_ids-method/

  def quantities=(quantity_attributes)
    self.quantities.delete_all
    quantity_attributes.each do |quantity_attribute|
      quantity = Quantity.create(quantity_attribute)
      self.quantities << quantity
    end
  end

end
