import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CardcourseW extends Component {
  render() {
    return (
        <div style={{margin:10}}>
            <Card>
                  <Link className="btn btn-primary" to={'/course-details'}>
                    Overview
                  </Link>
                  <Link className="btn btn-primary" to={'/course-details'}>
                    Grade
                  </Link>
                  <Link className="btn btn-primary" to={'/course-details'}>
                    Notes
                  </Link>
                  <Link className="btn btn-primary" to={'/course-details'}>
                    Discussion Forum
                  </Link>
                  <Link className="btn btn-primary" to={'/course-details'}>
                    Message
                  </Link>
            </Card>
        </div>
    )
  }
}   