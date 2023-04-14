class Book < ApplicationRecord
    has_many :reviews
    belongs_to :user
    has_many :users, through: :reviews
end
