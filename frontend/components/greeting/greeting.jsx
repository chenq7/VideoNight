import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const header = 
  <header className="header1">
      <img src={window.logo} className="logo" alt="VideoNight"/>
  </header>

  const display = props.currentUser ? (
    <div>
      {header}
      <div>Hello, {props.currentUser.username}</div>
      <button className="sign-out" onClick={props.logout}>Log Out</button>
    </div>
  ) : (
  <div>
    {header}
    <Link to="/login" className="sign-in">SIGN IN</Link>
  </div>
  );

  return (
    <header>
      <div>{display}</div>
    </header>
  );
}