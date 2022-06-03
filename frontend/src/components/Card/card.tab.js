import React, { Component } from 'react'
import { Tab } from 'react-bootstrap'
import { GetTabByIdTopic } from '../functions/cardtab.data'

export default class CardTab extends Component {
  render() {
    return (
      <Tab.Content>
      <GetTabByIdTopic id_topic={this.props.data.id_topic}/>
      </Tab.Content>
    )
  }
}   