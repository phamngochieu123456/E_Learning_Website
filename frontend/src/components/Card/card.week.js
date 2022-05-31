import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

export default class CardcourseW extends Component {
  render() {
    return (
      <>
      <Nav.Item className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
      Navigation and Navigation Bar
      </Nav.Item>
      <div className="collapse show" id="collapseExample">
      <Nav.Item>
      <Nav.Link eventKey="first">Navigation and Navigation Bar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="second">User Input: Buttons and Forms</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="third">Displaying Content: Tables and Cards</Nav.Link>
      </Nav.Item>
      </div>
      </>
    )
  }
}   