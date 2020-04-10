import React from "react";
import { Route, Switch } from 'react-router-dom';
import VideoIndex from './video/video_index_container';
import VideoShow from './video/video_show_container';
import UserProfile from './user/user_profile_container';
import Search from './search/search_container';
import Trending from './trending/trending_container';
import Header from './header/header_container';
import Sidebar from './sidebar/sidebar_container';
import Modal from './modal/modal';


const App = () => (
  <div className="app-container">
    <Modal />
    <header className="main-header">
      <Header />
      <Sidebar />
    </header>
    <Switch>
      <Route exact path='/' component={VideoIndex} />
      <Route exact path="/user/:userId" component={UserProfile} />
      <Route exact path="/videos/:videoId" component={VideoShow} />
      <Route exact path="/trending" component={Trending} />
      <Route path="/results" component={Search} />
    </Switch>
  </div>
);

export default App;