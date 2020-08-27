import React from 'react'
import './header.css'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import Login from '../Login/Login'

function Header() {
  return (
    <header>
      <section>
        <h1>Welcome</h1>
      </section>
      <Router><NavLink to='/login' render={Login}>Login</NavLink></Router>
    </header>
  )
}

export default Header
