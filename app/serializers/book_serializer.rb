class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author
  has_many :reviews, serializer: ReviewSerializer
end