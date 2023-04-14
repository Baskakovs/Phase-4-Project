class Review < ApplicationRecord
    belongs_to :book
    belongs_to :user

    #Validations
    validates :title, presence: true
    validates :text, presence: true
    validates :book_id, presence: true
    validates :user_id, presence: true
end
