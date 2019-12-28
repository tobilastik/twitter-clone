import React, {Component} from 'react';
import {tweetsData} from '../data/trendingData';

export default class Timeline extends Component {
  state = {
    data: tweetsData,
  };
  render () {
    const {data} = this.state;
    return (
      <div className="timeline-container">
        {data.map (tweet => {
          return (
            <div className="tweets-timeline">
              <img
                src={tweet.avatar}
                className="timeline-avatar"
                alt="Timeline Avatar"
              />
              <div className="timeline-name">
                <h3>{tweet.name}</h3>
                <h5>{tweet.handle}</h5>
              </div>

              <div>
                {tweet.tweets}
                <img
                  src={tweet.image}
                  className="timeline-media"
                  alt="Timeline Avatar"
                />
              </div>
              <div className="tweets-actionbtn">
                <i className="far fa-comment" />
                <i className="fas fa-retweet" />
                <i className="far fa-heart" />
                <i className="far fa-share-square" />
                {/* <i class="fas fa-chevron-down" /> */}
              </div>

            </div>
          );
        })}
        <hr />
      </div>
    );
  }
}
