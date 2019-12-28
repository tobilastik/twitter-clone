import React, {Component} from 'react';
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
  render () {
    return (
      <div className="sidebar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="sidebar-item">

          <Link to="/" className="fa fa-home sidebar-logo checked">
            <p>Home</p>
          </Link>
          <Link to="/" className="fa fa-hashtag sidebar-logo">
            {' '}<p>Explore</p>
          </Link>
          <Link to="/" className="far fa-bell sidebar-logo">
            <p>Notifications</p>
          </Link>
          <Link to="/" className="far fa-envelope sidebar-logo">
            {' '}<p>Messages</p>
          </Link>
          <Link to="/" className="far fa-bookmark sidebar-logo">
            <p>Bookmarks</p>
          </Link>
          <Link to="/" className="fa fa-list-alt sidebar-logo">
            {' '}<p>Lists</p>
          </Link>
          <Link to="/" className="far fa-user sidebar-logo">
            {' '}<p>Profile</p>
          </Link>
          <Link to="/" className="fa fa-list sidebar-logo"> <p>More</p></Link>

          <a href="/" className="tweet-button">Tweet</a>
        </div>
      </div>
    );
  }
}
