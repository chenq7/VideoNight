import React from "react";
import { Route } from 'react-router-dom';
import VideoIndex from './video/video_index_container';
import VideoShow from '../components/video/video_show_container';
import Header from '../components/header/header_container';


const App = (props) => (
  <div className="app-container">
    <Header />
    <Route exact path='/' component={VideoIndex} />
    <Route exact path="/videos/:videoId" component={VideoShow} />
  </div>
);

export default App;