import React, {Component} from 'react';
import Avatar from '../assets/images/avatar.jpg';

export default class TweetsText extends Component {
  render () {
    return (
      <div>
        <div className="tweets-text">
          <img src={Avatar} alt="Avatar" className="tweets-avatar" />
          <form>
            <input placeholder="What's happening?" className="tweets-area" />
          </form>
        </div>

        <div className="tweets-icon">
          <div className="tweets-icon1">
            <i className="far fa-image" />
            <i className="fa fa-glide" />
            <i className="fas fa-poll" />
            <i className="far fa-smile" />
            <i className="far fa-clock" />
          </div>
          <div className="tweets-icon2">
            <i className="fas fa-spinner" /> {}
            | {}

            <i className="fas fa-plus-circle" /> {}

            <a href="/" className="tweets-button">Tweet</a>
          </div>

        </div>
        <hr className="tweets-hr" />
      </div>
    );
  }
}
