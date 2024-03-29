# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo = User.create!(
    email: 'demo@gmail.com',
    first_name: 'demo',
    last_name: 'yu',
    password: 'password',
    balance: 10000,
    stocks: [],
)

Stock.delete_all

amd = Stock.create!(
    user_id: demo.id,
    ticker: "AMD",
    amount: 5,
    unit_price: 0,
)