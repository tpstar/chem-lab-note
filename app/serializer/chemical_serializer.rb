class ChemicalSerializer < ActiveModel::Serializer
  attributes :name, :formula, :fw, :density, :eq, :g, :mL, :mol, :mp, :bp
  has_one :user
  has_many :reactions
end
