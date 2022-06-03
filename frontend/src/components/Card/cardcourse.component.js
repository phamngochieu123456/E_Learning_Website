import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Cardcourse extends Component {
  render() {
    return (
        <div style={{margin:10}}>
            <Card>
            <Card.Img src={"http://localhost:5000/" + this.props.data.img_path_class}></Card.Img>
            <Card.Body>
                <Card.Title>{this.props.data.name_class}</Card.Title>
                <Card.Text>
                {this.props.data.description_class}
                </Card.Text>
                  <Link className="btn btn-primary" to={'/course-details/'+this.props.data.id_class}>
                    Learn More
                  </Link>
            </Card.Body>
            </Card>
        </div>
    )
  }
}   