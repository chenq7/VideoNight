# VideoNight

## Introduction

VideoNight is a video-sharing platform inspired by Youtube that allows users to view and upload videos. Users can create an account (or login as demo user) to like and comment on other people's videos as well as upload and edit their own videos on their profile page. The site also features a trending page and a search bar to search for specific videos.

## [Live Link](https://videonight.herokuapp.com/#/) 

## Technologies used

* Backend
  * PostgreSQL - v.10.12
  * Ruby on Rails - v.5.2.3
* Frontend
  * React - v.16.12
  * Redux - v.7.1.3
* Cloud platforms
  * Amazon Web Services (S3)
  * Heroku

## Functionality and MVPs

* Users are able to signup, login, or logout
* Users can use a demo login to try the site
* Logged in users can upload, edit and delete their own videos 
* Users can like/dislike and comment on videos as well as like/dislike comments
* Users can see trending videos and use the search bar to search for specific videos

## Features

### Login and Logout

![](app/assets/gifs/login.gif)

Clicking the login button will open up the email form component where the user will enter their email address. This email gets sent back to the user controller using an ajax request on a customized 'api/valid_email' route

```
  def valid_email?
    @user = User.find_by(email: params[:valid_email][:valid_email])
    if @user
      render json: {valid_email: true, username: @user.username }
    else
      render json: {valid_email: false}
    end
  end
```

It will display an error if the email is not found or route to the password form component if email is valid. Entering a valid password will login the user and save the session token on the user's browser, or display an error if password is invalid. 

### Upload and delete video

![](app/assets/gifs/upload.gif)

### Like and Comment

![](app/assets/gifs/comment.gif)

### Search and trending page

![](app/assets/gifs/search.gif)

