import React, { Component } from 'react'
import '../../assets/css/home.css'
import { UserData } from '../functions/users.data';
export default class User extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning Admin | Users';
  }
  render() {
    return (
        <>
            <UserData />
        </>
    )
  }
}   