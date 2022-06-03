import React, { Component } from 'react'
import { Card, Row, Tab, Tabs } from 'react-bootstrap'
import '../../assets/css/home.css'
import { GetDocumentBySubTopicId } from '../functions/document.data'

export default class LearnLecture extends Component {
  render() {
    return (
        <>
            <Card>
                <GetDocumentBySubTopicId id_sub_topic={this.props.id_sub_topic} />
            </Card>
        </>
    )
  }
}   