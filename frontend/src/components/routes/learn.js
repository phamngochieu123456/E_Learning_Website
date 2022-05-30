import axios from 'axios'
import React, { Component } from 'react'
import { Card, Container, Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'
export default class Learn extends Component {
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
                <div style={{margin:10}}>
                  <Card style={{margin:10}}>
                        <Dropdown >
                          <Dropdown.Toggle variant="light" id="dropdown-basic" style={{width:'100%'}}>
                          Overview
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{width:'100%',textAlign:'center'}}>
                            <Dropdown.Item href="learn/week">Week 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Week 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Week 3</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                  </Card>
                  <Card style={{margin:10}}>
                    <Link className="btn btn-light" to={'/course-details'}>
                            Grade
                          </Link>
                  </Card>
                  <Card style={{margin:10}}>
                    <Link className="btn btn-light" to={'/course-details'}>
                            Notes
                          </Link>
                  </Card>
                  <Card style={{margin:10}}>
                    <Link className="btn btn-light" to={'/course-details'}>
                            Discussion Forum
                          </Link>
                  </Card>
                  <Card style={{margin:10}}>
                    <Link className="btn btn-light" to={'/course-details'}>
                            Message
                          </Link>
                  </Card>
                </div>
              </Row>
          </Container>

        </div>
    )
  }
}   