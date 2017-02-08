class UserSerializer < ActiveModel::Serializer
  attributes :email, :first_name, :last_name
  has_many :reactions
  has_many :chemicals
end
