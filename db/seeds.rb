# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Clear existing data
Book.destroy_all

# Generate 20 books
20.times do
  Book.create!(
    title: Faker::Book.title,
    description: Faker::Lorem.paragraph,
    author: Faker::Book.author
  )
end

puts 'Seed data created successfully!'