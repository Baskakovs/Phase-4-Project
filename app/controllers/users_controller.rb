class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render_unprocessable_entity_response(invalid)
    end
  
    private
  
    def user_params
      params.permit(:name, :email, :password)
    end
  
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  end
  