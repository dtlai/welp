# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo_user = User.create!(
    first_name: 'Guest',
    last_name: 'User',
    email: 'guest_user@email.com',
    password: 'guestuser',
    zipcode: '90045',
    birthday: '01/01/1990',
) 
