import React, { Component } from 'react'
import { BsBoxArrowInRight } from 'react-icons/bs';
import '../../assets/css/login.component.css'
import axios from 'axios'

export default class Settings extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning | Settings';
  }
  constructor(props){
      super(props);
      const account = JSON.parse(localStorage.getItem("user"));
      this.state={
        password: account.password,
        rePassword: account.rePassword,
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
      const res = await axios.post("http://localhost:5000/user/account-profile",payload,{headers})

      if(res.data.success)
      {
          console.log(JSON.stringify(res.data))
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
        <div className="mb-2">
              <section>
                  <p style={{fontSize:30}}>Change password</p>
              </section>
          </div>
          <hr/>
          <div className="mb-3">
            <input
              type="password"
              name='password'
              className="form-control"
              placeholder='password'
              defaultValue={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name='rePassword'
              className="form-control"
              placeholder="rePassword"
              defaultValue={this.state.rePassword}
              onChange={this.handleChange}
              required
            />
          </div>
          <hr/>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn btn-success btn-block" onSubmit={this.handleSubmit}>
            <BsBoxArrowInRight />  Save change
            </button>
          </div>


      </div>
      
    );
  }  
}