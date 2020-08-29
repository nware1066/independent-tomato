import React, { Component } from 'react';
import Header from './Header/Header';
import AllMovies from './AllMoviesPage/AllMovies'
import Login from './Login/Login'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
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

  componentDidMount() {
    getAllMovies()
      .then(movies => this.setState({movies: movies.movies}))
      .catch(error => this.setState({error: 'something went wrong'}))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Link to="/">All Movies</Link>
          <Link to="/login">Login</Link>
        </div>
        <Route exact path='/'>
          <AllMovies movies={this.state.movies}/>
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </div>
    );
  }

}

export default App;
