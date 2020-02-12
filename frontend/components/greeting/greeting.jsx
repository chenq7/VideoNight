import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const header = <img src={window.logo} className="logo" alt="VideoNight"/>

  const display = props.currentUser ? (
    <>
      {header}
      <button className="user-btn">{props.currentUser.username}</button>
      <button className="sign-out" onClick={props.logout}>Sign Out</button>
    </>
  ) : (
  <>
    {header}
    <Link to="/login" className="sign-in">SIGN IN</Link>
  </>
  );

  return (
    <header className="header1">
      {display}
    </header>
  );
}