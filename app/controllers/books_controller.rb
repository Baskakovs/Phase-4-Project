class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books, each_serializer: BookSerializer, include:["reviews", "reviews.user"], status: :ok
    end


    # def show
    #     book = Book.find(params[:id])
    #     render json: book, status: :ok
    # end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
        rescue ActiveRecord::RecordInvalid => invalid 
    render_unprocessable_entity_response(invalid)
    end

    private

    def book_params
        params.require(:book).permit(:title, :author, :description, :user_id) #NOTE NEED TO ADD USER_ID
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
