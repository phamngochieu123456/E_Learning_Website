import React, { Component } from 'react'
import { BsBoxArrowInRight } from 'react-icons/bs';
import profileImage from '../../assets/images/profile.png';
import '../../assets/css/login.component.css'
import axios from 'axios'

export default class Account_profile extends Component {

  constructor(props){
      super(props);
      const account = JSON.parse(localStorage.getItem("user"));
      this.state={
        username: account.name_user,
        profileImage: account.avatar_user,
        phoneNumber: account.phone_user,
        Birth: account.birth_user.substr(0,10),
        Gender: account.sex_user,
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
      // console.log(res)
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
                  <p style={{fontSize:30}}>Edit my profile</p>
              </section>
          </div>
          <hr/>
          <div className="mb-2">
            <img src={profileImage} alt=""></img>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name='username'
              className="form-control"
              placeholder='User name'
              defaultValue={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name='phoneNumber'
              className="form-control"
              placeholder="PhoneNumber"
              defaultValue={this.state.phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name='birth'
              className="form-control"
              defaultValue={this.state.Birth}
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
                value="1"
                defaultChecked={this.state.Gender ? '1' : ''}
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
                    value="0"
                    defaultChecked={!this.state.Gender ? '0' : ''}
                    onChange={this.handleChange}
                  />
                  Female
                </label>
            </div>
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