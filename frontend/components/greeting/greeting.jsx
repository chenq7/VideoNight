import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const display = props.currentUser ? (
    <div>
      <div>Hello, {props.currentUser.username}</div>
      <button className="sign-out" onClick={props.logout}>Log Out</button>
    </div>
  ) : (
      <div>
        <Link to="/login" className="sign-in">SIGN IN</Link>
      </div>
    );

  return (
    <header>
      <div>{display}</div>
    </header>
  );
}