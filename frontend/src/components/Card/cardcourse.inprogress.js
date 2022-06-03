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
                            <img style={{width:300}} src={"http://localhost:5000/" + this.props.data.img_path_class}></img>
                        </Col>
                            <Col>
                                <Card.Body style={{marginTop:30}}>
                                    <Card.Title>{this.props.data.name_class}</Card.Title>
                                    <Card.Text>
                                    {this.props.data.description_class}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col>
                                <Card.Body style={{marginTop:30}}>
                                    <Link className="btn btn-primary" to={'/learn/'+this.props.data.id_class}>
                                        Go To Course
                                    </Link>
                                </Card.Body>
                            </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
  }
}   