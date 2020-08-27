import React { Component } from 'react'
import './login.css'
import { getUser } from './APICalls/APICalls'


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

  handleLogIn = (event) => {
    event.preventDefault();
    getUser(this.state.username, this.state.password);
    console.log(this.state.username)
  }

  render() {
    return {
      <section className='login-container'>
        <form className='login-form'>
          <label ClassName='login-label' for='user-name'>name</label>
          <input
            className='login-input'
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
          />
          <label ClassName='login-label' for='user-password'>password</label>
          <input
            className='login-input'
            type='text'
            name='password'
            placeholder='password'
            value={this.state.password}
          />
          <button onClick={ event => this.handleLogIn(event)}>Submit</button>
        </form>
      </section>
    }
  }

}

export default Login
