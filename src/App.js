import React, { Component } from 'react';

import VideoPlayer from './component/video_player';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tiny Desk Player</h2>
        </div>
        <div>
          <VideoPlayer />
        </div>
      </div>
    );
  }
}

export default App;
