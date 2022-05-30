import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CardcourseC extends Component {
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
                                <Card.Title>Đã hoàn thành</Card.Title>
                                    <Card.Text>
                                    20/1/2022 - 22/3/2022
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
  }
}   