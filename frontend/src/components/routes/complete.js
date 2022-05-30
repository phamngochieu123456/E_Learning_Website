import axios from 'axios'
import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import '../../assets/css/home.css'
import CardcourseC from '../Card/card.complete'
export default class Completed extends Component {
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
              <Row><CardcourseC /></Row>
              <Row><CardcourseC /></Row>
              <Row><CardcourseC /></Row>
          </Container>

        </div>
    )
  }
}   