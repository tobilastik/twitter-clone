import React, {Component} from 'react';
import TrendContainer from '../components/TrendContainer';
import FollowContainer from '../components/FollowContainer';
import Footer from './Footer';

export default class Trendbar extends Component {
  render () {
    return (
      <div className="trendbar">
        <div>
          <form>
            <input className="searchbar" placeholder="Search Twitter" />
          </form>
        </div>
        <TrendContainer />
        <FollowContainer />
        <Footer />
      </div>
    );
  }
}
