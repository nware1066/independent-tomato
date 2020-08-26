import React, { Component } from 'react';
import Header from './Header/Header';
import AllMovies from './AllMoviesPage/AllMovies'
import { getAllMovies } from './APICalls/APICalls'

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

  // componentDidMount() {
  //   getIdeas()
  //     .then(ideas => this.setState({ ideas }))
  //     .catch(err => console.error(err.message))
  // }

  componentDidMount() {
    getAllMovies()
      .then(movies => this.setState({movies}))
      .catch(error => this.setState({error: 'something went wrong'}))
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
