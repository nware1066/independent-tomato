import React, { Component } from 'react'
import './Login.css'
import { postUser } from '../APICalls/APICalls'

class Login extends Component  {
  constructor(props) {
    super(props)
      this.state = {
        username: '',
        email: '',
        password: '',
        error: ''
      }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogIn = (event) => {
    event.preventDefault();
    // resolve promise of fetchedUserData
    postUser(this.state.username, this.state.password)
    .then(user => this.props.getUser(user));
    // send user to App.js

  }

  render() {
    return (
      <section className='login-container'>
        <form className='login-form'>
          <div className='login-username'>
            <label className='login-label' htmlFor='username'>name:</label>
            <input
              className='login-input'
              type='text'
              name='username'
              placeholder='username'
              value={this.state.username}
              onChange = {this.handleInputChange}
            />
          </div>
          <div className='login-password'>
            <label className='login-label' htmlFor='password'>password:</label>
            <input
              className='login-input'
              type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange = {this.handleInputChange}
            />
          </div>
          <button className='submit-button' onClick={ event => this.handleLogIn(event)}>Submit</button>
        </form>
      </section>
    )
  }
}


export default Login
