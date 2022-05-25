import React, { Component } from 'react'
import SearchPage from './searchfield'
import { BrowserRouter as Route, Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
      return (
        <form>
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              DUT-Elearning
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/courses'}>
                    Course
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/blog '}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <SearchPage />
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item" id='sign-up'>
                  <Link className="nav-link" to={'/sign-up'} style={{color:'blue'}}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </form>
      )
    }
  }