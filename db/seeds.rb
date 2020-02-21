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

demo_user = User.create({username: "Demo user", email: "demouser@gmail.com", password: "demopassword"})
test_user = User.create({username: "test123", email: "test123@gmail.com", password: "test123"})
meme_user = User.create({username: "I love Memes", email: "meme69and420@gmail.com", password: "memeislife"})
rain_user = User.create({username: "Rain", email: "ilovetherain@gmail.com", password: "peaceandquiet"})

marvel = User.create({username: "Marvel Entertainment", email: "marvelentertainment@gmail.com", password: "temppassword"})
one_media = User.create({username: "ONE Media", email: "onemedia@gmail.com", password: "temppassword"})
universal = User.create({username: "Universal Pictures", email: "universal@gmail.com", password: "temppassword"})
disney = User.create({username: "Walt Disney Studios", email: "disney@gmail.com", password: "temppassword"})
pokemon_fan = User.create({username: "Pokemon Fan", email: "pokemonfan@gmail.com", password: "temppassword"})
nayan = User.create({username: "Nayan", email: "nayan@gmail.com", password: "temppassword"})

udacity = User.create({username: "Udacity", email: "udacity@gmail.com", password: "temppassword"})

# Video Tables

# Movie Trailer Seeds
vid1 = Video.create({title:"Marvel Studios Avengers: Infinity War Official Trailer", description: "There was an idea... Avengers: Infinity War. In theaters April 27.", view_count: 721, author_id: marvel.id })
thumbnail1 = open('https://video-night-seeds.s3.amazonaws.com/avengers.jpg')
vid1.thumbnail.attach(io: thumbnail1, filename: "avengers.jpg")
file1 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/avengers.mp4")
vid1.video.attach(io: file1, filename: 'avengers.mp4')
vid1.save

vid2 = Video.create({title:"STRANGER THINGS 4 Trailer Teaser (2020)", description: "STRANGER THINGS 4 Trailer Teaser (2020) Season 4, S04 Hopper © 2020 - Netflix", view_count: 481, author_id: one_media.id })
thumbnail2 = open('https://video-night-seeds.s3.amazonaws.com/stranger_things.jpg')
vid2.thumbnail.attach(io: thumbnail2, filename: "stranger_things.jpg")
file2 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/stranger_things.mp4")
vid2.video.attach(io: file2, filename: 'stranger_things.mp4')
vid2.save

vid3 = Video.create({title:"The Turning - Official Trailer", description: "Keeping the lights on won't keep you safe. Watch the trailer for #TheTurningMovie, in theaters January 24.", view_count: 221, author_id: universal.id })
thumbnail3 = open('https://video-night-seeds.s3.amazonaws.com/turning.jpg')
vid3.thumbnail.attach(io: thumbnail3, filename: "turning.jpg")
file3 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/turning.mp4")
vid3.video.attach(io: file3, filename: 'turning.mp4')
vid3.save

vid4 = Video.create({title:"Jurassic World: Fallen Kingdom - Official Trailer [HD]", description: "Jurassic World: Fallen Kingdom. In Theaters June 22, 2018 ", view_count: 567, author_id: universal.id })
thumbnail4 = open('https://video-night-seeds.s3.amazonaws.com/jurassic_park.jpg')
vid4.thumbnail.attach(io: thumbnail4, filename: "jurassic_park.jpg")
file4 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/jurassic_park.mp4")
vid4.video.attach(io: file4, filename: 'jurassic_park.mp4')
vid4.save

vid5 = Video.create({title:"The Lion King Official Trailer", description: "Disney's The Lion King opens in theaters July 19, 2019. Watch the new trailer now. ", view_count: 137, author_id: disney.id })
thumbnail5 = open('https://video-night-seeds.s3.amazonaws.com/lion_king.jpg')
vid5.thumbnail.attach(io: thumbnail5, filename: "lion_king.jpg")
file5 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/lion_king.mp4")
vid5.video.attach(io: file5, filename: 'lion_king.mp4')
vid5.save

# Pokemon moment seeds
vid6 = Video.create({title:"Pokemon funny scene - Ghastly scares Jesse", description: "Short video clip from Pokemon series", view_count: 221, author_id: pokemon_fan.id })
thumbnail6 = open('https://video-night-seeds.s3.amazonaws.com/poke1.jpg')
vid6.thumbnail.attach(io: thumbnail6, filename: "poke1.jpg")
file6 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/poke1.mp4")
vid6.video.attach(io: file6, filename: 'poke1.mp4')
vid6.save

vid7 = Video.create({title:"Evil pikachu", description: "So evil", view_count: 601, author_id: pokemon_fan.id })
thumbnail7 = open('https://video-night-seeds.s3.amazonaws.com/poke2.jpg')
vid7.thumbnail.attach(io: thumbnail7, filename: "poke2.jpg")
file7 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/poke2.mp4")
vid7.video.attach(io: file7, filename: 'poke2.mp4')
vid7.save

vid8 = Video.create({title:"Alolan Marowak Dances! Funny Moments! Pokemon Sun And Moon Episode 34", description: "Alolan Marowak Funny Dance", view_count: 91, author_id: pokemon_fan.id })
thumbnail8 = open('https://video-night-seeds.s3.amazonaws.com/poke3.jpg')
vid8.thumbnail.attach(io: thumbnail8, filename: "poke3.jpg")
file8 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/poke3.mp4")
vid8.video.attach(io: file8, filename: 'poke3.mp4')
vid8.save

vid9 = Video.create({title:"Meltan too op", description: "op op", view_count: 55, author_id: pokemon_fan.id })
thumbnail9 = open('https://video-night-seeds.s3.amazonaws.com/poke4.jpg')
vid9.thumbnail.attach(io: thumbnail9, filename: "poke4.jpg")
file9 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/poke4.mp4")
vid9.video.attach(io: file9, filename: 'poke4.mp4')
vid9.save

vid10 = Video.create({title:"Cute Mew! - Pokémon Movie 22 Mewtwo Strikes Back Evolution [HD]", description: "Look how cute he is", view_count: 355, author_id: nayan.id })
thumbnail10 = open('https://video-night-seeds.s3.amazonaws.com/poke5.jpg')
vid10.thumbnail.attach(io: thumbnail10, filename: "poke5.jpg")
file10 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/poke5.mp4")
vid10.video.attach(io: file10, filename: 'poke5.mp4')
vid10.save


# Learning seeds
vid11 = Video.create({title:"Min/Max Rescaler Coding Quiz - Intro to Machine Learning", description: "This video is part of an online course, Intro to Machine Learning.", view_count: 115, author_id: udacity.id })
thumbnail11 = open('https://video-night-seeds.s3.amazonaws.com/code1.jpg')
vid11.thumbnail.attach(io: thumbnail11, filename: "code1.jpg")
file11 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/code1.mp4")
vid11.video.attach(io: file11, filename: 'code1.mp4')
vid11.save

vid12 = Video.create({title:"Maximal Variance - Intro to Machine Learning", description: "This video is part of an online course, Intro to Machine Learning.", view_count: 95, author_id: udacity.id })
thumbnail12 = open('https://video-night-seeds.s3.amazonaws.com/code2.jpg')
vid12.thumbnail.attach(io: thumbnail12, filename: "code2.jpg")
file12 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/code2.mp4")
vid12.video.attach(io: file12, filename: 'code2.mp4')
vid12.save

vid13 = Video.create({title:"A New Feature - Intro to Machine Learning", description: "This video is part of an online course, Intro to Machine Learning.", view_count: 146, author_id: udacity.id })
thumbnail13 = open('https://video-night-seeds.s3.amazonaws.com/code3.png')
vid13.thumbnail.attach(io: thumbnail13, filename: "code3.png")
file13 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/code3.mp4")
vid13.video.attach(io: file13, filename: 'code3.mp4')
vid13.save

vid14 = Video.create({title:"[sol: age is continuous] - Intro to Machine Learning", description: "This video is part of an online course, Intro to Machine Learning.", view_count: 152, author_id: udacity.id })
thumbnail14 = open('https://video-night-seeds.s3.amazonaws.com/code4.jpg')
vid14.thumbnail.attach(io: thumbnail14, filename: "code4.jpg")
file14 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/code4.mp4")
vid14.video.attach(io: file14, filename: 'code4.mp4')
vid14.save

vid15 = Video.create({title:"Practice With Margins - Intro to Machine Learning", description: "This video is part of an online course, Intro to Machine Learning.", view_count: 72, author_id: udacity.id })
thumbnail15 = open('https://video-night-seeds.s3.amazonaws.com/code5.jpg')
vid15.thumbnail.attach(io: thumbnail15, filename: "code5.jpg")
file15 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/code5.mp4")
vid15.video.attach(io: file15, filename: 'code5.mp4')
vid15.save


# Created by demo user
vid16 = Video.create({title:"3D scenes of nature", description: "Cool 3d animation of nature, enjoy!", view_count: 521, author_id: demo_user.id })
thumbnail16 = open('https://video-night-seeds.s3.amazonaws.com/nature.jpg')
vid16.thumbnail.attach(io: thumbnail16, filename: "nature.jpg")
file16 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/nature.mp4")
vid16.video.attach(io: file16, filename: 'nature.mp4')
vid16.save

vid17 = Video.create({title:"Hummingbird with flowers - 30 second animation", description: "3d animation of a humming bird in nature. Be sure to like, comment, and subscribe!", view_count: 822, author_id: demo_user.id })
thumbnail17 = open('https://video-night-seeds.s3.amazonaws.com/humming_bird.jpg')
vid17.thumbnail.attach(io: thumbnail17, filename: "humming_bird.jpg")
file17 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/humming_bird.mp4")
vid17.video.attach(io: file17, filename: "humming_bird.mp4")
vid17.save

# Created by meme user

vid18 = Video.create({title:"Funny minions video || 30 sec minions video", description: "", view_count: 438, author_id: meme_user.id })
thumbnail18 = open('https://video-night-seeds.s3.amazonaws.com/minion_fighting.jpg')
vid18.thumbnail.attach(io: thumbnail18, filename: "minion_fighting.jpg")
file18 = EzDownload.open("https://video-night-seeds.s3.amazonaws.com/minion_fighting.mp4")
vid18.video.attach(io: file18, filename: 'minion_fighting.mp4')
vid18.save