import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      email: "",
      password: "",
      username: "",
      phoneNumber: "",
      Birth: "",
      Gender: "",
      SignUpError: "",
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
        console.log(JSON.stringify(res.data))
        window.location.reload(); 
    }
    else
    {
        this.state.SignUpError = res.data.data
        alert(this.state.SignUpError)
    }
    console.log(JSON.stringify(res))
  }
  catch(err)
  {
    console.log("Error: " + err)
  }
}
  render() {
    return (
      <div className="auth-inner">
        <h3>Sign Up</h3>
        <div className="mb-3">
            <input
              type="text"
              name='email'
              className="form-control"
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
        <div className="mb-3">
            <input
              type="text"
              name='password'
              className="form-control"
              placeholder='Enter password'
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
        <div className="mb-3">
            <input
              type="text"
              name='username'
              className="form-control"
              placeholder='Enter username'
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name='phoneNumber'
              className="form-control"
              placeholder="Enter Phone Number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name='birth'
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <div className="radio">
            <label>
              <input
                type="radio"
                name='gender'
                value="Male"
                defaultChecked={this.state.Gender === "Male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            </div>
            <div className="radio">
                <label>
                  <input
                    type="radio"
                    name='gender'
                    value="Female"
                    defaultChecked={this.state.Gender === "Female"}
                    onChange={this.handleChange}
                  />
                  Female
                </label>
            </div>
          </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <hr></hr>
        <div className="d-grid">
          <GoogleLoginButton onClick={() => alert("Facebook")} >
          <span>Sign up with Google</span>
          </GoogleLoginButton>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to={'/login'}>Sign in ?</Link>
        </p>
      </div>
    )
  }
}