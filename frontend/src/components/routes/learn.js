import axios from 'axios'
import React, { Component } from 'react'
import { Card, Container, Dropdown, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'
import { GetWeekByIdClass } from '../functions/cardweek.data'
export default class Learn extends Component {
  render() {
    return (
        <div className='container-fluid'>
          <Container>
            <GetWeekByIdClass />
              <Row>
                <div style={{margin:10}}>
                  <Card style={{margin:10}}>
                  <Nav.Item className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                    Overview
                    </Nav.Item>
                    <div className="collapse show" id="collapseExample">
                    <Nav.Item>
                    <Nav.Link href='/learn/week'>Week 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href='/learn/week'>Week 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href='/learn/week'>Week 3</Nav.Link>
                    </Nav.Item>
                    </div>
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