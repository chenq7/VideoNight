# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create({username: "demo user", email: "demouser@gmail.com", password: "demopassword"})

test = User.create({username: "test123", email: "test123@gmail.com", password: "test123"})

demoVideo = Video.create({title:"demo video", description: "just a demo video", view_count: 0, author_id: demo.id })

testVideo = Video.create({title:"test video", description: "just a test video", view_count: 0, author_id: test.id })