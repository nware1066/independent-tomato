import React, { Component } from 'react';
import Header from './Header/Header';
import AllMovies from './AllMoviesPage/AllMovies'

import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies: [],
        error: '',
        user: {},
      }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AllMovies />
      </div>
    );
  }
}

export default App;
