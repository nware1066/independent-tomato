import React, { Component } from 'react';
import Header from './Header/Header';
import AllMovies from './AllMoviesPage/AllMovies';
import Login from './Login/Login';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
      this.getUser = this.getUser.bind(this);
      console.log(this.getUser)
  }

  componentDidMount() {
    getAllMovies()
      .then(movies => this.setState({movies: movies.movies}))
      .catch(error => this.setState({error: 'something went wrong'}))
  }

  // import fetchedUserData from Login
  getUser(user) {
    console.log(user)
    this.setState({user})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Link to="/">All Movies</Link>
        </div>
        <Route exact path='/'>
          <AllMovies movies={this.state.movies}/>
        </Route>
        <Route exact path='/login'>
          <Login getUser={this.getUser}/>
        </Route>
      </div>
    );
  }

}

export default App;
