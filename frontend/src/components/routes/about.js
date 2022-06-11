import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Background from '../../assets/images/background-sologan.png'
import Partner from '../../assets/images/partner-logos.png'
import Banner from '../banner'
export default class About extends Component {
  render() {
    return (
    <div className="container-fluid" >
        <Banner></Banner>
        <Container>
            <Row>
                <Col>
                <h5 style={{textAlign:'left',marginTop:'10%'}}>DUT-Elearning partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</h5>
                </Col>
                <Col>
                <img src={Partner} style={{width:'80%'}}></img>
                </Col>
            </Row>
        </Container>
        <div className='text-center text-light' style={{borderRadius:50, backgroundImage: `url(${Background})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <br />
            <h2 className='fw-bolder fs-1'>We belive</h2>
            <br />
            <h3>Learning is the source of human progress.</h3>
            <br />
            <h3>It has the power to transform our world</h3>
            <h3>from illness to health,</h3>
            <h3>from poverty to prosperity,</h3>
            <h3>from conflict to peace.</h3>
            <br />
            <h3>It has the power to transform our lives</h3>
            <h3>for ourselves,</h3>
            <h3>for our families,</h3>
            <h3>for our communities.</h3>
            <br />
            <h3>No matter who we are or where we are,</h3>
            <h3>learning empowers us to change and grow</h3>
            <h3>and redefine what’s possible.</h3>
            <h3>That’s why access to the best learning is a right, not a privilege.</h3>
            <br />
            <h3>And that’s why Coursera is here.</h3>
            <h3>We partner with the best institutions</h3>
            <h3>to bring the best learning</h3>
            <h3>to every corner of the world.</h3>
            <br />
            <h3>So that anyone, anywhere has the power to</h3>
            <h3>transform their life through learning.</h3>
            <br />
        </div>
    </div>
    )
  }
}