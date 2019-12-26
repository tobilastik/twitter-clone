import React, {Component} from 'react';
import {followData} from '../data/trendingData';

export default class FollowContainer extends Component {
  state = {
    data: followData,
  };
  render () {
    const {data} = this.state;
    return (
      <div className="trend-container">
        <div className="trend-header">
          <p>Who to follow </p>
        </div>
        <hr />

        {data.map (follow => {
          return (
            <div
              onClick={() => console.log ('ok')}
              className="follow-data"
              key={follow.id}
            >
              <br />
              <img src={follow.image} alt="img" className="follow-dp" />
              <div>
                <h2>{follow.name}</h2>
                <h3>{follow.handle}</h3>
              </div>
              <a href="/" className="follow-button">Follow</a>

            </div>
          );
        })}
        <br />
        <a href="/" className="trend-showmore">Show more</a>
      </div>
    );
  }
}
