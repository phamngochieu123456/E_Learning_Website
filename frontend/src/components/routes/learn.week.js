import React, { Component } from 'react'
import { Row, Tab } from 'react-bootstrap'
import '../../assets/css/home.css'
import { CardTopicData } from '../functions/cardtopic.data'
export default class LearnWeek extends Component {
  render() {
    return (
        <div className='container-fluid'>
          <Tab.Container id="left-tabs-example">
            <Row>
              <CardTopicData />
            </Row>
            </Tab.Container>
        </div>
    )
  }
}   