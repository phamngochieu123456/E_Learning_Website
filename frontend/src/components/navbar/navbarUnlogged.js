import React, { Component } from 'react'
import SearchPage from '../searchfield'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../../assets/css/navbar.css'

export default class NavbarUnlogged extends Component {
    render() {
      return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              DUT-Elearning
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/home'}>
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
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/blog '}>
                    Blog
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <SearchPage />
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-outline-success" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
  }