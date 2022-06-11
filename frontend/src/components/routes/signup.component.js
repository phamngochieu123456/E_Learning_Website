import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      email: "",
      pass_account: "",
      name_user: "",
      phone_user: "",
      birth_user: "",
      sex_user: "",
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
              name='pass_account'
              className="form-control"
              placeholder='Enter password'
              value={this.state.pass_account}
              onChange={this.handleChange}
              required
            />
          </div>
        <div className="mb-3">
            <input
              type="text"
              name='name_user'
              className="form-control"
              placeholder='Enter username'
              value={this.state.name_user}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name='phone_user'
              className="form-control"
              placeholder="Enter Phone Number"
              value={this.state.phone_user}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name='birth_user'
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3 row">
            <div className='col'>
              sex_user
            </div>
            <div className="radio col">
            <label>
              <input
                type="radio"
                name='sex_user'
                value="1"
                defaultChecked={this.state.sex_user === "Male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            </div>
            <div className="radio col">
                <label>
                  <input
                    type="radio"
                    name='sex_user'
                    value="0"
                    defaultChecked={this.state.sex_user === "Female"}
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
        <p className="forgot-pass_account text-right">
          Already registered <Link to={'/login'}>Sign in ?</Link>
        </p>
      </div>
    )
  }
}