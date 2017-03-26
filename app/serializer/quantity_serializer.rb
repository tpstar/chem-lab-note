class QuantitySerializer < ActiveModel::Serializer
  attributes :chemical_id, :eq, :g, :mL, :mol
  belongs_to :reaction

end
