class ReviewsController < ApplicationController
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
        rescue ActiveRecord::RecordInvalid => invalid 
    render_unprocessable_entity_response(invalid)
    end

    private

    def review_params
        params.require(:review).permit(:title, :text, :book_id, :user_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
