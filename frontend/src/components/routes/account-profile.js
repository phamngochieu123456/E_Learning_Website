import React, { Component } from 'react'
import { BsBoxArrowInRight } from 'react-icons/bs';
import profileImage from '../../assets/images/profile.png';
import '../../assets/css/login.component.css'
import axios from 'axios'
import { ImageUpload } from '../functions/upload.image';

export default class Account_profile extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning | Profile';
  }
  constructor(props){
      super(props);
      const account = JSON.parse(localStorage.getItem("user"));
      this.state={
        name_user: account.name_user,
        image_user: '',
        phone_user: account.phone_user,
        birth_user: account.birth_user.substr(0,10),
        sex_user: account.sex_user,
        id_user: account.id_user,
        img: 'http://localhost:5000'+account.avatar_user
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  }
  handleSubmit = async (event) => {
    try
    {
      event.preventDefault()
      const payload = new FormData()
      payload.append("name_user",this.state.name_user)
      payload.append("image_user",this.state.image_user)
      payload.append("phone_user",this.state.phone_user)
      payload.append("birth_user",this.state.birth_user)
      payload.append("sex_user",this.state.sex_user)

      const user = localStorage.getItem("user");
      const userjson = JSON.parse(user)
      payload.append("id_user",userjson.id_user)

      const config = {
        method: 'put',
        url: 'http://localhost:5000/user/updateUser',
        withCredentials: true,
        data: payload,
        headers: {'Content-Type': 'multipart/form-data'}
      }
      const res = await axios(config)
      console.log(JSON.stringify(res))
    }
    catch(err)
    {
      console.log("Error: " + err)
    }    
  }
  render() {
    return (
      <form className="auth-inner" onSubmit={this.handleSubmit}>
        <div className="mb-2">
              <section>
                  <p style={{fontSize:30}}>Edit my profile</p>
              </section>
          </div>
          <hr/>
          <div className="mb-2">
            <img 
              src={this.state.img} 
              alt=""
              />
          </div>
          <ImageUpload handleChange = {this.handleClick}/>
          <div className="mb-3">
            <input
              type="text"
              name='name_user'
              className="form-control"
              placeholder='User name'
              defaultValue={this.state.name_user}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name='phone_user'
              className="form-control"
              placeholder="phone_user"
              defaultValue={this.state.phone_user}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name='birth_user'
              className="form-control"
              defaultValue={this.state.birth_user}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <div className="radio">
            <label>
              <input
                type="radio"
                name='sex_user'
                value="1"
                defaultChecked={this.state.sex_user ? '1' : ''}
                onChange={this.handleChange}
              />
                Male
            </label>
            </div>
            <div className="radio">
                <label>
                  <input
                    type="radio"
                    name='sex_user'
                    value="0"
                    defaultChecked={!this.state.sex_user ? '0' : ''}
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


      </form>
      
    );
  }  
}