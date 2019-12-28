import React, {Component} from 'react';
import Avatar from '../assets/images/avatar.jpg';

export default class TweetsText extends Component {
  state = {
    submit: false,
    inputText: '',
  };

  handleChange = e => {
    this.setState ({
      inputText: e.target.value,
    });
  };

  submitChange = e => {
    e.preventDefault ();
    this.setState ({
      submit: true,
      inputText: this.state.inputText,
    });
  };

  render () {
    const {inputText} = this.state;
    return (
      <div>
        <form onSubmit={this.submitChange}>
          <div className="tweets-text">
            <img src={Avatar} alt="Avatar" className="tweets-avatar" />
            <form>
              <textarea
                type="text"
                // value={this.state.inputText}
                placeholder="What's happening?"
                className="tweets-area"
                onChange={this.handleChange}
              />
            </form>
          </div>

          <div className="tweets-icon">
            <div className="tweets-icon1">
              {/* <i className="far fa-image" />
            <i className="fa fa-glide" />
            <i className="fas fa-poll" />
            <i className="far fa-smile" />
            <i className="far fa-clock" /> */}
            </div>

            <button onClick={this.submitChange} className="tweets-button">
              Tweet
            </button>

          </div>
          <hr className="tweets-hr" />
        </form>
        {/* {this.state.inputText ? <p>{this.state.inputText}</p> : ''} */}

      </div>
    );
  }
}
