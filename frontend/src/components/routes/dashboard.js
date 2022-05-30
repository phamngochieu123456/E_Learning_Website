import axios from 'axios'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/css/home.css'
import Cardcourse from '../Card/cardcourse.component'
export default class Dashboard extends Component {
  componentDidMount()
  {

    async function islogin()
    {
      try
      {
        const res = await axios.get("http://localhost:5000/user/islogin")
        if(res.data.success)
        {
          localStorage.setItem("name_account",res.data.data.name_account)
          localStorage.setItem("id_account",res.data.data.id_account)
          window.location.reload()
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