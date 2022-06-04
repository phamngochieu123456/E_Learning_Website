import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default class CardcourseC extends Component {
  render() {
    return (
        <div style={{margin:10}}>
            <Card>
                <Container>
                    <Row>
                        <Col>
                        <Card.Img style={{width:250,height:250}} src={"http://localhost:5000/" + this.props.data.img_path_class}></Card.Img>
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