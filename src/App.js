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
        <BrowserRouter>
        // <Route path='/' render={ () => <AllMovies movies={this.state.movies} /> } />
        // <Route path='/Login' render={ () => <Login /> } />
          <div>
             <Link to="/">All Movies</Link>
             <Link to="/">Login</Link>
          </div>
          <Switch>
            <Route exact path='/'>
              <AllMovies movies={this.state.movies}/>
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  // <Switch>
  //         <Route exact path="/">
  //           <Home />
  //         </Route>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/dashboard">
  //           <Dashboard />
  //         </Route>
  //       </Switch>
}

export default App;
