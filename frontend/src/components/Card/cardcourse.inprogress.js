import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CardcourseIP extends Component {
  render() {
    return (
        <div style={{margin:10}}>
            <Card>
                <Container>
                    <Row>
                        <Col>
                            <img style={{width:300}} src='https://i.ytimg.com/vi/WUNWhIjUF2Y/hqdefault.jpg'></img>
                        </Col>
                            <Col>
                                <Card.Body style={{marginTop:30}}>
                                    <Card.Title>Khóa học C++</Card.Title>
                                    <Card.Text>
                                    Nắm được kiến thức cơ bản về C++
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col>
                                <Card.Body style={{marginTop:30}}>
                                    <Link className="btn btn-primary" to={'/learn'}>
                                        Go To Course
                                    </Link>
                                    <hr></hr>
                                    <button className="bg-white" style={{color:'black', width:'100%', borderRadius:10}}>
                                        Reset deadlines
                                    </button>
                                </Card.Body>
                            </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
  }
}   