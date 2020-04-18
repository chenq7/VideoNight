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

Clicking on the upload icon opens up a modal of the video post component. The component contains a form element with input files handled by handlefile function and upload button handled by the handlesubmit functions below.

```
  handleFile(e, name, url) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        [name]: file,
        [url]: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    if (this.state.thumbnail) formData.append('video[thumbnail]', this.state.thumbnail);
    if (this.state.video) formData.append('video[video]', this.state.video);

    this.setState({ disableSubmit: true });
   
    this.props.createVideo(formData).then((video) => {
      this.props.closeModal();
      this.props.history.push(`/videos/${video.data.video.id}`);
    }, () => {
      this.setState({ disableSubmit: false });
    });
  }
```

The handle submit function disables the upload button after the first click (to prevent multiple uploads) and sends an ajax request to the video controller for create. If the video is successfully uploaded, it will close the modal and enable the upload button, else it will display errors for why the upload fails (no thumbnail, title, or video file, etc). 

### Like and Comment

![](app/assets/gifs/comment.gif)

Likes are created using rails polymorphic associations on videos and comments on the backend

```
  class CreateLikes < ActiveRecord::Migration[5.2]
    def change
      create_table :likes do |t|
        t.boolean :is_liked, null: false
        t.integer :user_id, null: false
        t.references :likeable, polymorphic: true

        t.timestamps
      end
      add_index :likes, :user_id
      add_index :likes, :is_liked
    end
  end

  class Like < ApplicationRecord
    belongs_to :likeable, polymorphic: true
  end
  
  class Video < ApplicationRecord
    has_many :likes, 
      as: :likeable,
      dependent: :destroy
  end
  
  class Comment < ApplicationRecord
    has_many :likes, 
      as: :likeable,
      dependent: :destroy
  end
```

Liking a video or comment will create a like and unliking will delete the like, as show in the handleLike function below.

```
  handleLike(e, is_liked){
    e.preventDefault();
    if (!this.props.currentUser){
      this.props.history.push('/login');
      return
    }
    if (this.props.video.like){
      if (is_liked === this.props.video.like.is_liked){
        this.props.deleteVideoLike(this.props.video.id);
      }
      else {
        this.props.deleteVideoLike(this.props.video.id).then(() => this.createLike(is_liked));
      }
    }
    else {
      this.createLike(is_liked);
    }
  }
  
  createLike(is_liked){
    let newLike = { is_liked, likeable_id: this.props.video.id, likeable_type: "Video"};
    this.props.createVideoLike(newLike);
  }
```

### Search and trending page

![](app/assets/gifs/search.gif)

Search and trending is done using ajax requests to custom routes in the video controller

```
  def search
    @videos = Video.where('lower(title) LIKE lower(?)', "%#{params[:result]}%").slice(0,10)
    render :index
  end

  def trending
    @videos = Video.order(:view_count).last(10)
    render :index
  end 
```

### Bonus Features 
