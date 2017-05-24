import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';

import VideoPlayer from './component/video_player';
import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyCLVi6RhA8MtQZ0jHBU-ZwCEArURcEL6QY';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Tiny Desk Player</h2>
        </div>
        <div>
          <SearchBar />
          <VideoPlayer />
        </div>
      </div>
    );
  }
}

export default App;
