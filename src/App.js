import React, { Component } from 'react';
import Header from './Header/Header';
import AllMovies from './AllMoviesPage/AllMovies';
import Login from './Login/Login';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { getAllMovies } from './APICalls/APICalls'

import './App.css';

class App extends Component {
constructor() {
    super()
      this.state = {
        movies: [],
        error: '',
        user: {},
        isLoggedIn: false
      }
      this.getUser = this.getUser.bind(this);
      this.logInUser = this.logInUser.bind(this);
  }

  componentDidMount() {
    getAllMovies()
      .then(movies => this.setState({movies: movies.movies}))
      .catch(error => this.setState({error: 'something went wrong'}))
  }

  getUser(user) {
    this.setState(user)
  }

  logInUser(isLoggedIn) {
    this.setState(isLoggedIn)
    console.log(this.state.isLoggedIn)
  }

  render() {
    return (
      <div className="App">
      <Header user={this.state.user} isLoggedIn={this.state.isLoggedIn}/>
        <div>
          <Link to="/"></Link>
        </div>
        <Route exact path='/'>
          <AllMovies movies={this.state.movies}/>
        </Route>
        <Route exact path='/login'>
          <Login getUser={this.getUser} logInUser={this.logInUser}
            isLoggedIn={this.state.isLoggedIn}/>
        </Route>
      </div>
    );
  }

}

export default App;
