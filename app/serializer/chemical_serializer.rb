class ChemicalSerializer < ActiveModel::Serializer
  attributes :id, :name, :formula, :fw, :density, :eq, :g, :mL, :mol, :mp, :bp, :updated_at
  belongs_to :user
  has_many :reactions
end
