class ReviewsController < ApplicationController
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
        rescue ActiveRecord::RecordInvalid => invalid 
    render_unprocessable_entity_response(invalid)
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
        rescue ActiveRecord::RecordInvalid => invalid
    render_unprocessable_entity_response(invalid)
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.require(:review).permit(:title, :text, :book_id, :user_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
