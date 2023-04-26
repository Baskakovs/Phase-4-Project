class Book < ApplicationRecord
    belongs_to :user
    has_many :reviews, dependent: :destroy
    has_many :reviewers, through: :reviews, source: :user, dependent: :destroy

    validates :title, presence: true
    validates :author, presence: true
    validates :description, presence: true
end
