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
            <img src={window.home} className="sidebar-logo home-logo" alt="" />
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
          <a href="https://github.com/chenq7" target="_blank">
            <img src={window.github} className="sidebar-logo" alt="" />
          </a>
          <span>Github</span>
        </div>

        <div className="sidebar-box">
          <a href="https://www.linkedin.com/in/qixiang-chen/" target="_blank">
            <img src={window.linkedin} className="sidebar-logo" alt="" />
          </a>
          <span>Linkedin</span>
        </div>

        <div className="sidebar-box">
          <a href="https://angel.co/qixiang-chen-1" target="_blank">
            <img src={window.angelist} className="sidebar-logo" alt="" />
          </a>
          <span>AngelList</span>
        </div>

        <div className="sidebar-box">
          <a href="https://chenq7.github.io/" target="_blank">
            <img src={window.portfolio} className="sidebar-logo" alt="" />
          </a>
          <span>Portfolio</span>
        </div>
      </div>
    );
  }
}

export default Sidebar;