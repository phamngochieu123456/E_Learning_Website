import axios from 'axios'
import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import '../../assets/css/home.css'
import CardcourseIP from '../Card/cardcourse.inprogress'
export default class InProgress extends Component {
  componentDidMount()
  {

    async function islogin()
    {
      try
      {
        const config = {
          method: 'get',
          url: 'http://localhost:5000/user/islogin',
          withCredentials: true
        }
        const res = await axios(config)
        if(res.data.success)
        {
          localStorage.setItem("account",JSON.stringify(res.data.data))
          const islogin = localStorage.getItem("islogin")
          if(!islogin)
          {
            localStorage.setItem("islogin",true)
            window.location.reload()
          }
        }
        else
        {
          console.log("Error: " + res.data.data)
        }
      }
      catch(err)
      {
        console.log("Error: " + err)
      }
    }
    islogin()
  }
  render() {
    return (
        <div className='container-fluid'>
          <Container>
              <Row><CardcourseIP /></Row>
              <Row><CardcourseIP /></Row>
              <Row><CardcourseIP /></Row>
          </Container>

        </div>
    )
  }
}   