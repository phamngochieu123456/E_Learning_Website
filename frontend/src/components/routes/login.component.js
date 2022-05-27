import React, { Component } from 'react'
import { BsBoxArrowInRight } from 'react-icons/bs';
import Logo from '../../assets/images/DUT-Academy.png';
import loginStyle from '../../assets/css/login.component.css'
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import { authjwt } from '../functions/login';

export default class Login extends Component {

  constructor(props){
      super(props);
      this.state={
        email: "",
        password: "",
        loginError: "",

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = async (event) => {
    try
    {
      event.preventDefault();
      const payload = this.state;
      const headers = {
        authorization: ' JWT fefege...' ,
        'Content-Type': 'application/json'
      }
      const res = await axios.post("http://localhost:5000/user/login",payload,{headers})

      if(res.data.success)
      {
          // localStorage.setItem("name_account",res.data.data.user.name_account)
          // localStorage.setItem("id_account",res.data.data.user.id_account)
          localStorage.setItem("accesstoken",res.data.data.accesstoken)
          localStorage.setItem("refreshtoken",res.data.data.refreshtoken)
          authjwt()
      }
      else
      {
          this.state.loginError = res.data.data
          alert(this.state.loginError)
      }
      console.log(JSON.stringify(res))
    }
    catch(err)
    {
      console.log("Error: " + err)
    }
  }
  handleLoginGG = async (event) => {
    event.preventDefault()
    window.open("http://localhost:5000/user/login/google")
  }
  renderContent() {
    return (
      <div className="auth-inner">
        <div className="mb-2">
              <section>
                  <img style={loginStyle} src={Logo} alt="" />
              </section>
          </div>
          <hr/>
          <div className="mb-3">
            <input
              type="email"
              name='email'
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name='password'
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleChange}
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
            <button type="submit" className="btn btn-primary btn btn-success btn-block" onClick={this.handleSubmit}>
            <BsBoxArrowInRight />  Sign in
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link to={'/forgot-password'}>password ?</Link>
          </p>
          <div className="d-grid">
            <GoogleLoginButton onClick={this.handleLoginGG} />
          </div>
          <hr/>
          <div className="d-grid">
            <Link className="link" to={'/sign-up'}>Sign up new Account</Link>
          </div>

      </div>
      
    );
  }  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container" ref={el => (this.container = el)}>
        {this.renderContent()}
        </div>      
        <div></div>
      </form>
    )
  }
}