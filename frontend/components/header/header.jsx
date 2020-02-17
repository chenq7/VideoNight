import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const nav = <img src={window.hamburger} className="hamburger-icon" alt="" />
  const logo = <img src={window.logo} alt="VideoNight" />
  const search = <img src={window.search} className="search-icon" alt="" />
  const addVideo = <img src={window.add_video} className="add-video-icon" alt="" />

  const display = props.currentUser ? (
    <>
      <button className="user-btn">
        <span>{props.currentUser.username[0].toUpperCase()}</span>
      </button>
      <button className="sign-out" onClick={props.logout}>Sign Out</button>
    </>
  ) : (
      <>
        <Link to="/login" className="sign-in">
          <img src={window.signin_logo} className="signin-logo" alt="" />
          <span>SIGN IN</span>
        </Link>
      </>
  );

  return (
    <header className="header1">
      <div className="left-container">
        {nav}
        <Link className="logo" to="/">{logo}</Link>
      </div>
      <div className="center-container">
        <div className="search-input">
          <input type="text" placeholder="Search"/>
        </div>
        <button type="button" className="search-btn">{search}</button>
      </div>
      <div className="right-container">
        {addVideo}
        {display}
      </div>
    </header>
  );
}
