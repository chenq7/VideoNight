# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Video.destroy_all
User.destroy_all

# User Tables

demo_user = User.create({username: "demo user", email: "demouser@gmail.com", password: "demopassword"})

test_user = User.create({username: "test123", email: "test123@gmail.com", password: "test123"})

meme_user = User.create({username: "I love Memes", email: "meme69and420@gmail.com", password: "memeislife"})

rain_user = User.create({username: "Rain", email: "ilovetherain@gmail.com", password: "peaceandquiet"})

# Video Tables

# Created by demo user
vid1 = Video.create({title:"3D scenes of nature", description: "Cool 3d animation of nature, enjoy!", view_count: 521, author_id: demo_user.id })
thumbnail1 = open('https://video-night-seeds.s3.amazonaws.com/nature.jpg')
vid1.thumbnail.attach(io: thumbnail1, filename: "nature.jpg")
file1 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/nature.mp4")
vid1.video.attach(io: file1, filename: 'nature.mp4')
vid1.save

vid2 = Video.create({title:"Hummingbird with flowers - 30 second animation", description: "3d animation of a humming bird in nature. Be sure to like, comment, and subscribe!", view_count: 822, author_id: demo_user.id })
thumbnail2 = open('https://video-night-seeds.s3.amazonaws.com/humming_bird.jpg')
vid2.thumbnail.attach(io: thumbnail2, filename: "humming_bird.jpg")
file2 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/humming_bird.mp4")
vid2.video.attach(io: file2, filename: "humming_bird.mp4")
vid2.save

# Created by Rain
vid3 = Video.create({title:"Never Give Up!", description: "Don't give up!!!", view_count: 711, author_id: rain_user.id })
thumbnail3 = open('https://video-night-seeds.s3.amazonaws.com/never_give_up.png')
vid3.thumbnail.attach(io: thumbnail3, filename: "never_give_up.png")
file3 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/never_give_up.mp4")
vid3.video.attach(io: file3, filename: 'never_give_up.mp4')
vid3.save

vid4 = Video.create({title:"Why is this duck chasing me?", description: "Be sure to subscribe for more action packed adventure!", view_count: 210, author_id: rain_user.id })
thumbnail4 = open('https://video-night-seeds.s3.amazonaws.com/running_duck.jpg')
vid4.thumbnail.attach(io: thumbnail4, filename: "running_duck.jpg")
file4 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/running_duck.mp4")
vid4.video.attach(io: file4, filename: 'running_duck.mp4')
vid4.save

vid5 = Video.create({title:"Squeaking Frog", description: "Just a frog squeaking", view_count: 67, author_id: rain_user.id })
thumbnail5 = open('https://video-night-seeds.s3.amazonaws.com/squeaking_frog.jpg')
vid5.thumbnail.attach(io: thumbnail5, filename: "squeaking_frog.jpg")
file5 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/squeaking_frog.mp4")
vid5.video.attach(io: file5, filename: 'squeaking_frog.mp4')
vid5.save

# Created by meme user

vid6 = Video.create({title:"Funny minions video || 30 sec minions video", description: "", view_count: 438, author_id: meme_user.id })
thumbnail6 = open('https://video-night-seeds.s3.amazonaws.com/minion_fighting.jpg')
vid6.thumbnail.attach(io: thumbnail6, filename: "minion_fighting.jpg")
file6 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/minion_fighting.mp4")
vid6.video.attach(io: file6, filename: 'minion_fighting.mp4')
vid6.save