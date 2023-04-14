class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :user_id, :book_id
end
