import axios from 'axios'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/css/home.css'
import Cardcourse from '../cardcourse.component'
export default class Dashboard extends Component {
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
            <Row>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
            </Row>
            <Row>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
            </Row>
            <Row>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
            </Row>
            <Row>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
              <Col><Cardcourse /></Col>
            </Row>
          </Container>

        </div>
    )
  }
}   