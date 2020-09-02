import React from 'react'
import './header.css'
import Login from '../Login/Login'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function Header(props) {
  let headerButton;
  if (props.isLoggedIn) {
    headerButton = <Link to="/login"><button className="header-button">Log out</button></Link>
  } else {
    headerButton = <Link to="/login"><button className="header-button">Log in</button></Link>
  }

  return (
    <header>
      <section className="header-section">
        <h1>Rancid Tomatillos</h1>
        {props.isLoggedIn && <h2>Welcome {props.user.name}!</h2>}
        {headerButton}
      </section>
    </header>
  )
}

export default Header
