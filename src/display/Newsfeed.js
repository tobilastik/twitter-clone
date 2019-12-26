import React, {Component} from 'react';
import HomeHeader from '../components/HomeHeader';
import TweetsText from '../components/TweetsText';
import Timeline from '../components/Timeline';

export default class Newfeed extends Component {
  render () {
    return (
      <div className="news-feed">
        <HomeHeader />
        <TweetsText />
        <Timeline />
      </div>
    );
  }
}
