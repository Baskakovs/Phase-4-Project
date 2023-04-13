class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books, status: :ok
    end

    # def show
    #     book = Book.find(params[:id])
    #     render json: book, status: :ok
    # end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render_unprocessable_entity_response(invalid.record)
    end

    private

    def book_params
        params.require(:book).permit(:title, :author, :description) #NOTE NEED TO ADD USER_ID
    end

    def render_unprocessable_entity_response
        render json: { errors: @book.errors.full_messages }, status: :unprocessable_entity
    end

end
