# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Clear existing data
Book.destroy_all
User.destroy_all
Review.destroy_all

5.times do
  user = User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )
  # Create books for each user
  5.times do
    book = Book.create!(
      title: Faker::Book.title,
      description: Faker::Lorem.paragraph,
      author: Faker::Book.author,
      user_id: user.id
    )
    # Create reviews for each book
    5.times do
      book.reviews.create!(
        title: Faker::Lorem.sentence,
        text: Faker::Lorem.paragraph,
        user_id: user.id,
        book_id: book.id
      )
    end
  end
end


puts 'Seed data created successfully!'