import React from 'react';
import './App.css';
import Sidebar from './display/Sidebar';
import Newsfeed from './display/Newsfeed';
import Trendbar from './display/Trendbar';

function App () {
  return (
    <div className="App">
      <Sidebar />
      <Newsfeed />
      <Trendbar />
    </div>
  );
}

export default App;
