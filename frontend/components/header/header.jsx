import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false, search: '' };
    this.toggleClass = this.toggleClass.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleUserProfile = this.handleUserProfile.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  handleSidebar() {
    const { sidebar, showSidebar, hideSidebar } = this.props;
    if (sidebar.show){
      hideSidebar();
    }
    else {
      showSidebar({ show: true });
    }
  }

  handleLogout() {
    if (this.props.location.pathname.includes("/user")){
      this.props.history.push("/");
      this.props.logout();
    }
    else {
      this.props.logout();
    }
  }

  handleUserProfile(currentUser) {
    this.toggleClass()
    this.props.history.push(`/user/${currentUser.id}`);
  }

  update(result){
    return e => {
      this.setState({ [result]: e.currentTarget.value });
    };
  }

  handleSearch(e){
    e.preventDefault();
    const result = this.state.search.split(" ").join("+");
    this.props.history.push(`/results?search_query=${result}`);
    window.location.reload();
  }

  render() {

    const { currentUser, openModal } = this.props;
    const nav = <img src={window.hamburger} className="hamburger-icon" onClick={this.handleSidebar}/>
    const logo = <img src={window.logo} alt="VideoNight" />
    const search = <img src={window.search} className="search-icon"/>
    const addVideo = <img src={window.add_video} className="add-video-icon" onClick={() => {
      (currentUser ? openModal({type: 'postVideo'}) : this.props.history.push('/login'))
    }}/>

    let userIcon;
    let userIcon2;
    if (currentUser){
      userIcon = (currentUser.username === "Demo user" ? (
        <img src={window.user_icon} className="demo-btn" onClick={this.toggleClass}/>
      ) : (
          <button className="user-btn" onClick={this.toggleClass}>
          <span>{currentUser.username[0].toUpperCase()}</span>
        </button>
      ));

      userIcon2 = (currentUser.username === "Demo user" ? (
        <img src={window.user_icon} className="demo-btn demo-btn2" onClick={this.toggleClass} />
      ) : (
          <button className="user-btn user-btn2" onClick={this.toggleClass}>
            <span>{currentUser.username[0].toUpperCase()}</span>
          </button>
      ));
    }

    const form = currentUser ? (
      <div className="user-profile">
        <div className="user-info">
          {userIcon2}
          <div className="user-text">
            <span className="username-text">{currentUser.username}</span>
            <span className="email-text">{currentUser.email}</span>
          </div>
        </div>

        <div>
          <button className="profile-btn" onClick={() => this.handleUserProfile(currentUser)}>
            <div className="user-actions">
              <img src={window.user} className="github-icon" />
              <span className="dropdown-btn">Your Profile</span>
            </div>
          </button>

          <a href="https://github.com/chenq7" target="_blank">
            <div className="user-actions">
              <img src={window.github} className="github-icon" />
              <span className="dropdown-btn">Github</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/qixiang-chen/" target="_blank">
            <div className="user-actions">
              <img src={window.linkedin} className="linkedin-icon" />
              <span className="dropdown-btn">LinkedIn</span>
            </div>
          </a>
          <a href="https://angel.co/qixiang-chen-1" target="_blank">
            <div className="user-actions">
              <img src={window.angelist} className="angelist-icon" />
              <span className="dropdown-btn">AngelList</span>
            </div>
          </a>
          <a href="https://chenq7.github.io/" target="_blank">
            <div className="user-actions">
              <img src={window.portfolio} className="portfolio-icon" />
              <span className="dropdown-btn">Portfolio</span>
            </div>
          </a>
          <div className="user-actions" onClick={this.handleLogout}>
            <img src={window.signout} className="signout-icon" />
            <span className="dropdown-btn">Sign Out</span>
          </div>
        </div>
      </div>
    ) : null;

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
          <form className="search-input-form" onSubmit={this.handleSearch}>
            <input className="search-input" type="text" placeholder="Search" value={this.state.search} onChange={this.update('search')}/>
            <button className="search-btn" type="submit">{search}</button>
          </form>
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


