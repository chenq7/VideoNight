import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = { hide: false };
  }

  componentDidMount() {
    this.props.hideSidebar();
  }

  smallSideBar(){
    return (
      <div
        className={`sidebar-container ${
          this.props.sidebar.show ? "sidebar-wider" : ""
        }`}
      >
        <div
          className={`sidebar-box ${
            this.props.sidebar.show ? "box-wider home-box" : ""
          }`}
        >
          <Link to="/">
            <img
              src={window.home}
              className={`sidebar-logo home-logo ${
                this.props.sidebar.show ? "logo-wider" : ""
              }`}
              alt=""
            />
          </Link>
          <span
            className={`${
              this.props.sidebar.show ? "font-larger home-span" : ""
            }`}
          >
            Home
          </span>
        </div>

        <div
          className={`sidebar-box ${
            this.props.sidebar.show ? "box-wider link-section-bot" : ""
          }`}
        >
          <Link to="/">
            <img
              src={window.trending}
              className={`sidebar-logo ${
                this.props.sidebar.show ? "logo-wider" : ""
              }`}
              alt=""
            />
          </Link>
          <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
            Trending
          </span>
        </div>
        {this.props.sidebar.show ? <div className="div-line"></div> : null}
        <a href="https://github.com/chenq7" target="_blank">
          <div
            className={`sidebar-box ${
              this.props.sidebar.show ? "box-wider link-section-top" : ""
            }`}
          >
            <img
              src={window.github}
              className={`sidebar-logo ${
                this.props.sidebar.show ? "logo-wider" : ""
              }`}
              alt=""
            />
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              Github
            </span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/qixiang-chen/" target="_blank">
          <div
            className={`sidebar-box ${
              this.props.sidebar.show ? "box-wider" : ""
            }`}
          >
            <img
              src={window.linkedin}
              className={`sidebar-logo ${
                this.props.sidebar.show ? "logo-wider" : ""
              }`}
              alt=""
            />
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              Linkedin
            </span>
          </div>
        </a>

        <a href="https://angel.co/qixiang-chen-1" target="_blank">
          <div
            className={`sidebar-box ${
              this.props.sidebar.show ? "box-wider" : ""
            }`}
          >
            <img
              src={window.angelist}
              className={`sidebar-logo ${
                this.props.sidebar.show ? "logo-wider" : ""
              }`}
              alt=""
            />
            <span className={`${this.props.sidebar.show ? "font-larger" : ""}`}>
              AngelList
            </span>
          </div>
        </a>

        <a href="https://chenq7.github.io/" target="_blank">
          <div
            className={`sidebar-box ${
              this.props.sidebar.show ? "box-wider link-section-bot" : ""
            }`}
          >
            <img
              src={window.portfolio}
              className={`sidebar-logo ${
                this.props.sidebar.show ? "logo-wider" : ""
              }`}
              alt=""
            />
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
        { this.smallSideBar() }
      </>
    );
  }
}

export default Sidebar;