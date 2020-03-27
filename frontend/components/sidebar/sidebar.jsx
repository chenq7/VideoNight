import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = { hide: false };
  }

  componentDidMount() {
    this.props.hideSidebar();
  }

  handleHideSidebar() {
    return e => {
      this.setState({ hide: true });
      setTimeout(() => {
        this.setState({ hide: false });
        this.props.hideSidebar();
      }, 220);
    };
  }

  isModalSidebar() {
    if (this.props.location.pathname.includes("/videos")) {
      return (
        <div className="left-container fixed-width">
          <img src={window.hamburger} className="hamburger-icon" onClick={this.handleSidebar} />
          <Link className="logo" to="/">
            <img src={window.logo} alt="VideoNight" />
          </Link>
        </div>
      )
    }
  }

  isVideoShow() {
    if (this.props.location.pathname.includes("/videos")) {
      return (this.state.hide ? "sidebar-transition-out" : "sidebar-transition-in");
    }
    return "";
  }

  sidebarModal() {
    if (this.props.sidebar.show) {
      return (
        <div className="modal-background" onClick={this.handleHideSidebar()}>
          {this.sideBar()}
        </div>
      )
    }
  }

  isHighlighted(){
    if (this.props.location.pathname.includes("/videos")) {
      return "";
    }
    return "home-box";
  }

  sideBar(){
    return (
      <div className={`sidebar-container ${ this.props.sidebar.show ? "sidebar-wider" : ""} ${this.isVideoShow()}`}>
        {this.isModalSidebar()}
        <Link to="/">
          <div className={`sidebar-box ${this.props.sidebar.show ? "box-wider" : ""} ${this.isHighlighted()}`}>
              <img src={window.home} className={`sidebar-logo home-logo ${this.props.sidebar.show ? "logo-wider" : ""}`}/>
            <span className={`${this.props.sidebar.show ? "font-larger home-span" : ""}`}>
              Home
            </span>
          </div>
        </Link>

        <Link to="/">
          <div className={`sidebar-box ${this.props.sidebar.show ? "box-wider link-section-bot" : ""}`}>
              <img src={window.trending} className={`sidebar-logo ${this.props.sidebar.show ? "logo-wider" : ""}`}/>
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              Trending
            </span>
          </div>
        </Link>
        
        {this.props.sidebar.show ? <div className="div-line"></div> : null}
        <a href="https://github.com/chenq7" target="_blank">
          <div className={`sidebar-box ${this.props.sidebar.show ? "box-wider link-section-top" : ""}`}>
            <img src={window.github} className={`sidebar-logo ${this.props.sidebar.show ? "logo-wider" : ""}`}/>
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              Github
            </span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/qixiang-chen/" target="_blank">
          <div className={`sidebar-box ${this.props.sidebar.show ? "box-wider" : ""}`}>
            <img src={window.linkedin} className={`sidebar-logo ${this.props.sidebar.show ? "logo-wider" : ""}`}/>
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              Linkedin
            </span>
          </div>
        </a>

        <a href="https://angel.co/qixiang-chen-1" target="_blank">
          <div className={`sidebar-box ${this.props.sidebar.show ? "box-wider" : ""}`}>
            <img src={window.angelist} className={`sidebar-logo ${this.props.sidebar.show ? "logo-wider" : ""}`}/>
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              AngelList
            </span>
          </div>
        </a>

        <a href="https://chenq7.github.io/" target="_blank">
          <div className={`sidebar-box ${this.props.sidebar.show ? "box-wider link-section-bot" : ""}`}>
            <img src={window.portfolio} className={`sidebar-logo ${this.props.sidebar.show ? "logo-wider" : ""}`}/>
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              Portfolio
            </span>
          </div>
        </a>
        {this.props.sidebar.show ? <div className="div-line"></div> : null}
      </div>
    );
  }

  render() {
    return ( 
      <>
        {this.isVideoShow() ? this.sidebarModal() : this.sideBar()}
      </>
    );
  }
}

export default withRouter(Sidebar);