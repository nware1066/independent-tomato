import React from 'react'
import './header.css'
import Login from '../Login/Login'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <section>
        <h1>Welcome</h1>
        <Link to="/login">Login</Link>
      </section>

    </header>
  )
}

export default Header
