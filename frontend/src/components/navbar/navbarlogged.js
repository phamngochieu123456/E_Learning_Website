import React, { Component } from 'react'
import SearchPage from '../searchfield'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../../assets/css/navbar.css'
import { NavDropdown } from 'react-bootstrap'
import { Logout } from '../functions/logout'
import axios from 'axios'

export default class NavbarLogged extends Component {
  componentDidMount = async() =>{
    try
    {
      const account = localStorage.getItem("account");
      const accountjson = JSON.parse(account)
      const payload = accountjson.id_account

      const headers = {
        authorization: ' JWT fefege...' ,
        'Content-Type': 'application/json'
      }
      const res = await axios.post("http://localhost:5000/user/getuserbyaccountid",{id_account:payload},{headers})

      if(res.data.success)
      {
          localStorage.setItem("user",JSON.stringify(res.data.data))
          console.log("again" )
      }
    }
    catch(err)
    {
      console.log("Error: " + err)
    }
  }
    render() {
      return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              DUT-Elearning
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/Dashboard'}>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/in-progress'}>
                    In progress
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/completed'}>
                    Completed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/blog '}>
                    Blog
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <SearchPage />
                </li>
                <li className="nav-item">
                    <NavDropdown title={JSON.parse(localStorage.getItem("account")).name_account} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/account-profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">My Purchases</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Accomplishments</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Help Center</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <Logout />
                    </NavDropdown>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
  }