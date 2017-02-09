class ChemicalSerializer < ActiveModel::Serializer
  attributes :name, :formula, :fw, :density, :eq, :g, :mL, :mol, :mp, :bp
  belongs_to :user
  has_many :reactions
end
