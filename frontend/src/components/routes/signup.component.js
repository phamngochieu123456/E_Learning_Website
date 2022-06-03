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
      Role: "",
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
    const config = {
      method: 'post',
      url: 'http://localhost:5000/user/signin',
      withCredentials: true,
      data: this.state
    }
    const res = await axios(config)
    // if(res.data.success)
    // {
    //   console.log("data: " + JSON.stringify(res.data.data))
    // }
    // else
    // {
    //   console.log("Error: " + res.data.data)
    // }
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
              type="password"
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
              name='Birth'
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3 row">
            <div className='col'>
              Gender
            </div>
            <div className="radio col">
            <label>
              <input
                type="radio"
                name='Gender'
                value="1"
                defaultChecked={this.state.Gender === "Male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            </div>
            <div className="radio col">
                <label>
                  <input
                    type="radio"
                    name='Gender'
                    value="0"
                    defaultChecked={this.state.Gender === "Female"}
                    onChange={this.handleChange}
                  />
                  Female
                </label>
            </div>
          </div>
          <div className="mb-3 row">
            <div className='col'>
              Role
            </div>
            <div className="radio col">
            <label>
              <input
                type="radio"
                name='Role'
                value="TEACHER"
                defaultChecked={this.state.Role === "TEACHER"}
                onChange={this.handleChange}
              />
              Teacher
            </label>
            </div>
            <div className="radio col">
                <label>
                  <input
                    type="radio"
                    name='Role'
                    value="STUDENT"
                    defaultChecked={this.state.Role === "STUDENT"}
                    onChange={this.handleChange}
                  />
                  Student
                </label>
            </div>
          </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
            Sign Up
          </button>
        </div>
        <hr></hr>
        <p className="forgot-password text-right">
          Already registered <Link to={'/login'}>Sign in ?</Link>
        </p>
      </div>
    )
  }
}