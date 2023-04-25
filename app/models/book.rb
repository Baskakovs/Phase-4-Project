class Book < ApplicationRecord
    belongs_to :user
    has_many :reviews
    has_many :reviewers, through: :reviews, source: :user

    validates :title, presence: true
    validates :author, presence: true
    validates :description, presence: true
end
