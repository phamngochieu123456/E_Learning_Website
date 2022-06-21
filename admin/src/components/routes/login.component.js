import React, { Component } from 'react'
import { BsBoxArrowInRight } from 'react-icons/bs';
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
  componentDidMount() {
    document.title = 'DUT-Elearning Admin | Login';
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

      const payload1 = this.state;
      const config1 = {
        method: 'post',
        url: 'http://localhost:5000/user/gettypeuser',
        withCredentials: true,
        data: payload1,
        headers: {
          authorization: ' JWT fefege...' ,
          'Content-Type': 'application/json'
        }    
      }
      const res1 = await axios(config1)

      if(res1.data.success && res1.data.data.name_type_user != "STUDENT")
      {
        localStorage.setItem("type_user", JSON.stringify(res1.data.data))
      }
      else
      {
        alert("You do not have permission to access to this!!!")
        return
      }

      const payload = this.state;
      const config = {
        method: 'post',
        url: 'http://localhost:5000/user/login',
        withCredentials: true,
        data: payload,
        headers: {
          authorization: ' JWT fefege...' ,
          'Content-Type': 'application/json'
        }    
      }
      const res = await axios(config)

      if(res.data.success)
      {
          localStorage.setItem("accesstoken",res.data.data.accesstoken)
          localStorage.setItem("refreshtoken",res.data.data.refreshtoken)
          authjwt()
      }
      else
      {
          this.state.loginError = res.data.data
          alert(this.state.loginError)
      }
    }
    catch(err)
    {
      console.log("Error: " + err)
    }
  }
  renderContent() {
    return (
      <div className="auth-inner">
        <div className="mb-2">
              <h1>DUT-Academy Admin</h1>
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
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn btn-success btn-block" onClick={this.handleSubmit}>
            <BsBoxArrowInRight />  Login
            </button>
          </div>
          <br />
      </div>
      
    );
  }  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container" style={{width:'40%',marginTop:'8%'}} ref={el => (this.container = el)}>
        {this.renderContent()}
        </div>      
        <div></div>
      </form>
    )
  }
}