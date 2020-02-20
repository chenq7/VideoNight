import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = { active: false };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {

    const { currentUser, openModal } = this.props;
    const nav = <img src={window.hamburger} className="hamburger-icon"/>
    const logo = <img src={window.logo} alt="VideoNight" />
    const search = <img src={window.search} className="search-icon"/>
    const addVideo = <img src={window.add_video} className="add-video-icon" onClick={() => {
      (currentUser ? openModal('postVideo') : this.props.history.push('/login'))
    }}/>

    let userIcon;
    let userIcon2;
    if (currentUser){
      userIcon = (currentUser.username === "demo user" ? (
        <img src={window.user_icon} className="demo-btn" onClick={this.toggleClass}/>
      ) : (
          <button className="user-btn" onClick={this.toggleClass}>
          <span>{currentUser.username[0].toUpperCase()}</span>
        </button>
      ));

      userIcon2 = (currentUser.username === "demo user" ? (
        <img src={window.user_icon} className="demo-btn demo-btn2" onClick={this.toggleClass} />
      ) : (
          <button className="user-btn user-btn2" onClick={this.toggleClass}>
            <span>{currentUser.username[0].toUpperCase()}</span>
          </button>
      ));
    }

    const form = (currentUser ? (
      <div className="user-profile">
        <div className="user-info">
          {userIcon2}
          <div className="user-text">
            <span className="username-text">{currentUser.username}</span>
            <span className="email-text">{currentUser.email}</span>
          </div>
        </div>

        <div>
          <a href="https://github.com/chenq7">
            <div className="user-actions">
              <img src={window.github} className="github-icon" />
              
                <button className="github-btn">Github</button>
            </div>
          </a>
          <div className="user-actions">
            <img src={window.linkedin} className="linkedin-icon" />
            <button className="linkedin-btn">Linkedin</button>
          </div>
          <div className="user-actions" onClick={this.props.logout}>
            <img src={window.signout} className="signout-icon" />
            <button className="sign-out">Sign Out</button>
          </div>
        </div>
      </div>
    ) : null);

    const display = currentUser ? (
      <>
        {userIcon}
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
            <input type="text" placeholder="Search" />
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

export default withRouter(Header);


