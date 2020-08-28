import React, { Component } from 'react'
import './Login.css'
import { getUser } from '../APICalls/APICalls'

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
    getUser(this.state.username, this.state.password);
    console.log('getUser', this.state.username);
  }

  render() {
    return (
      <section className='login-container'>
        <form className='login-form'>
          <label className='login-label' htmlFor='username'>name</label>
          <input
            className='login-input'
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange = {this.handleInputChange}
          />
          <label className='login-label' htmlFor='password'>password</label>
          <input
            className='login-input'
            type='text'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange = {this.handleInputChange}
          />
          <button onClick={ event => this.handleLogIn(event)}>Submit</button>
        </form>
      </section>
    )
  }
}


export default Login
