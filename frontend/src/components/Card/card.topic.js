import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { GetSubTopicByIdTopic } from '../functions/cardsubtopic.data'

export default class CardcourseT extends Component {
  render() {
    return (
      <>
      <Nav.Item className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target={"#"+this.props.data.id_topic} aria-expanded="true" aria-controls={this.props.data.id_topic}>
      {this.props.data.name_topic}
      </Nav.Item>
      <div className="collapse show" id={this.props.data.id_topic}>
      <GetSubTopicByIdTopic id_topic={this.props.data.id_topic}/>
      </div>
      </>
    )
  }
}   