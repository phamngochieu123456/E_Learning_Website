import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <hr></hr>
        <div className="d-grid">
          <FacebookLoginButton onClick={() => alert("Facebook")} >
          <span>Sign up with Facebook</span>
          </FacebookLoginButton>
          <GoogleLoginButton onClick={() => alert("Facebook")} >
          <span>Sign up with Google</span>
          </GoogleLoginButton>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to={'/login'}>Sign in ?</Link>
        </p>
      </form>
    )
  }
}