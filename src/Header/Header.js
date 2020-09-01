import React from 'react'
import './header.css'
import Login from '../Login/Login'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function Header(props) {
  return (
    <header>
      <section className="header-section">
        <h1>Rancid Tomatillos</h1>
        {props.username && <h2>Welcome {props.username}!</h2>}
        <Link to="/login"><button className="login-button">Log in</button></Link>
      </section>

    </header>
  )
}

export default Header
