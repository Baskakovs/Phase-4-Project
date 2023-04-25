class UserAndBookSerializer < ActiveModel::Serializer
  attributes :id
  has_many :books
end
