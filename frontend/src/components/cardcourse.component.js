import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Cardcourse extends Component {
  render() {
    return (
        <div style={{margin:10}}>
            <Card>
            <Card.Img src='https://i.ytimg.com/vi/WUNWhIjUF2Y/hqdefault.jpg'></Card.Img>
            <Card.Body>
                <Card.Title>Course Title</Card.Title>
                <Card.Text>
                Course description information.
                </Card.Text>
                  <Link className="btn btn-primary" to={'/course-details'}>
                    Learn More
                  </Link>
            </Card.Body>
            </Card>
        </div>
    )
  }
}   