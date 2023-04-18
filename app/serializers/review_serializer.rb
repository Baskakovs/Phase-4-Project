class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :created_at
  belongs_to :user
  belongs_to :book
end