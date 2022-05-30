import axios from 'axios'
import React, { Component } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import '../../assets/css/home.css'
import LearnLecture from './learn.lecture'
export default class LearnWeek extends Component {
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
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column bg-light">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Navigation and Navigation Bar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">User Input: Buttons and Forms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Displaying Content: Tables and Cards</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <LearnLecture />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <LearnLecture />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <LearnLecture />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    )
  }
}   