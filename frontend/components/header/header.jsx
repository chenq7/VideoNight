import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = { active: false }; 
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render () {
    const nav = <img src={window.hamburger} className="hamburger-icon" alt="" />
    const logo = <img src={window.logo} alt="VideoNight" />
    const search = <img src={window.search} className="search-icon" alt="" />
    const addVideo = <img src={window.add_video} className="add-video-icon" alt="" />
    const { currentUser } = this.props;

    const form = ( currentUser ? (
      <div className="user-profile">
        <div className="user-info">
          <button className="user-btn" type="button">
            <span>{currentUser.username[0].toUpperCase()}</span>
          </button>
          <div className="user-text">
            <span className="username-text">{currentUser.username}</span>
            <span className="email-text">{currentUser.email}</span>
          </div> 
        </div>

        <div>
          <div className="user-actions">
            <img src={window.github} className="github-icon" />
            <a href="https://github.com/chenq7">
              <button className="github-btn">Github</button>
            </a>
          </div>
          <div className="user-actions">
            <img src={window.linkedin} className="linkedin-icon" />
            <button className="linkedin-btn">Linkedin</button>
          </div>
          <div className="user-actions">
            <img src={window.signout} className="signout-icon" />
            <button className="sign-out" onClick={this.props.logout}>Sign Out</button>
          </div>
        </div>
      </div>
    ) : null );

    const display = currentUser ? (
      <>
        <button className="user-btn" onClick={this.toggleClass}>
          <span>{currentUser.username[0].toUpperCase()}</span>
        </button>
        {this.state.active ? form : null}
        
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
}

export default Header;


