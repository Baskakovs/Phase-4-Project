class Book < ApplicationRecord
    has_many :reviews
    belongs_to :user
    has_many :users, through: :reviews

    validates :title, presence: true
    validates :author, presence: true
    validates :description, presence: true
end
