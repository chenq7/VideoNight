import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-box">
          <Link to="/">
            <img src={window.home} className="sidebar-logo" alt="" />
          </Link>
          <span className="home-span">Home</span>
        </div>

        <div className="sidebar-box">
          <Link to="/">
            <img src={window.trending} className="sidebar-logo" alt="" />
          </Link>
          <span>Trending</span>
        </div>

        <div className="sidebar-box">
          <a href="https://github.com/chenq7">
            <img src={window.github} className="sidebar-logo" alt="" />
          </a>
          <span>Github</span>
        </div>

        <div className="sidebar-box">
          <a>
            <img src={window.linkedin} className="sidebar-logo" alt="" />
          </a>
          <span>Linkedin</span>
        </div>
      </div>
    );
  }
}

export default Sidebar;