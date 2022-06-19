import React, { Component } from 'react'
export default class forgotPassword extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning | Forgot Password';
  }
  render() {
    return (
      <div className='auth-inner'>
        <h3>Reset Password</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    )
  }
}