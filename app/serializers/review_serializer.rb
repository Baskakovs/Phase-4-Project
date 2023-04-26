class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :created_at, :book_id, :user_id
  belongs_to :user
  belongs_to :book
end