class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :user_id
  has_many :reviews, serializer: ReviewSerializer
end