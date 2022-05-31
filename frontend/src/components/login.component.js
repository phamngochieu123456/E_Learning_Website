import React, { Component } from 'react'
import { BsBoxArrowInRight } from 'react-icons/bs';
import Logo from '../assets/images/DUT-Academy.png';
import loginStyle from '../assets/css/login.component.css'
import { GoogleLoginButton } from "react-social-login-buttons";
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class Login extends Component {
  state={
      email:'',
      pwd:''
  }  
  handleSubmit = (e) =>{
      const {name,value} = e.target
      this.setState({[name]:value})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} action="http://localhost:5000/api/login/signup">
        <div className="container">
          <div className="mb-2">
              <section>
                  <img style={loginStyle} src={Logo} />
              </section>
          </div>
          <hr/>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" class="btn btn-success btn-block" onSubmit={this.handleSubmit}>
            <BsBoxArrowInRight />  Sign in
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link to={'/forgot-password'}>password ?</Link>
          </p>
          <div className="d-grid">
            <GoogleLoginButton onClick={() => alert("Google")} />
          </div>
          <hr/>
          <div className="d-grid">
            <Link className="link" to={'/sign-up'}>Sign up new Account</Link>
          </div>
        </div>      
      </form>
    )
  }
}