import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const header = <img src={window.logo} className="logo" alt="VideoNight"/>

  const display = props.currentUser ? (
    <>
      {header}
      <button className="user-btn">
        <span>{props.currentUser.username[0].toUpperCase()}</span>
      </button>
      <button className="sign-out" onClick={props.logout}>Sign Out</button>
    </>
  ) : (
  <>
    {header}
    <Link to="/login" className="sign-in">
      <img src={window.signin_logo} className="signin-logo" alt="" />
      <span>SIGN IN</span>
    </Link>
  </>
  );

  return (
    <header className="header1">
      {display}
    </header>
  );
}