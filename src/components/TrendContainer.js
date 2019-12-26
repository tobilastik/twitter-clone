import React, {Component} from 'react';
import {trendingData} from '../data/trendingData';

export default class TrendContainer extends Component {
  state = {
    data: trendingData,
  };
  render () {
    const {data} = this.state;
    return (
      <div className="trend-container">
        <div className="trend-header">
          <p>Trends for you </p>
          <i className="fa fa-cog" />
        </div>
        <hr />

        {data.map (trend => {
          return (
            <div
              onClick={() => console.log ('ok')}
              className="trend-data"
              key={trend.id}
            >
              <br />
              <h4>{trend.location}</h4>
              <h2>{trend.trending}</h2>
              <h3>{trend.tweets} Tweets</h3>
              <hr />

            </div>
          );
        })}
        <br />
        <a href="/" className="trend-showmore">Show more</a>
      </div>
    );
  }
}
