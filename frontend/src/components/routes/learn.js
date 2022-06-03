import React, { Component } from 'react'
import { Card, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'
import { GetWeekByIdClass } from '../functions/cardweek.data'
export default class Learn extends Component {
  render() {
    return (
        <div className='container-fluid'>
          <Container>
              <Row>
                <div style={{margin:10}}>
                  <Card style={{margin:10}}>
                  <Nav.Item className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                    Overview
                  </Nav.Item>
                  <div className="collapse show" id="collapseExample">
                    <GetWeekByIdClass />
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