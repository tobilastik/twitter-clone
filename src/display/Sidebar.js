import React, {Component} from 'react';
import logo from '../assets/images/logo.png';

export default class Sidebar extends Component {
  render () {
    return (
      <div className="sidebar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="sidebar-item">

          <i className="fa fa-home sidebar-logo checked"> Home</i>
          <i className="fa fa-hashtag sidebar-logo"> Explore</i>
          <i className="far fa-bell sidebar-logo"> Notifications</i>
          <i className="far fa-envelope sidebar-logo"> Message</i>
          <i className="far fa-bookmark sidebar-logo"> Bookmarks</i>
          <i className="fa fa-list-alt sidebar-logo"> Lists</i>
          <i className="far fa-user sidebar-logo"> Profile</i>
          <i className="fa fa-list sidebar-logo"> More</i>

          <a href="/" className="tweet-button">Tweet</a>
        </div>
      </div>
    );
  }
}
