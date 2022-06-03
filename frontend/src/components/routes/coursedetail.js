import React, { Component } from 'react'
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'
import ReactStars from "react-rating-stars-component";
import FAQ from '../Collapse/faq';

export default class CourseDetail extends Component {
    ratingChanged = (newRating) => {
        console.log(newRating);
      };
    componentDidMount()
    {
        // {this.props.match.params.id}
    }
  render() {
    return (
        <>
            <Container className='bg-dark container-fluid p-3'>
            <Row xs="auto" md={3}>
            <Col>
                <Card className='bg-transparent'>
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title className='text-white m-10'>Master of Science in Data Science</Card.Title>
                    <Card.Subtitle className='text-white'>University of Colorado Boulder</Card.Subtitle>
                </Card.Body>
                </Card>
                </Col>
                <Col></Col>
                <Col>
                <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Get started today</Card.Title>
                        <Card.Text>
                        Enroll in a course or request more information about the program.
                        </Card.Text>
                        <button className="bg-dark" style={{color:'white', width:'100%'}}>
                            Enroll Now
                        </button>
                        <hr></hr>
                        <button className="bg-white" style={{color:'black', width:'100%'}}>
                            Request Info
                        </button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
            <Row>
                <Card>
                <Card.Header className='d-flex'>-Course link-</Card.Header>
                <Card.Body>
                    <Tabs defaultActiveKey="Overview" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Overview" title="Overview">
                        <Card.Title className='d-flex'>Earn a data science degree from the only top-40 US public university with no application.</Card.Title>
                        <Card.Subtitle className='d-flex'>
                        *Academic Ranking of World Universities, 2019
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                        Learn valuable job skills for in-demand data science careers by pursuing a full Master of Science in Data Science degree from the University of Colorado Boulder. This fully online MS in Data Science is an ideal choice for career-focused learners eager to benefit from a comprehensive, multi-disciplinary approach. This program leverages unparalleled faculty expertise across statistics, data science, computer science, natural language processing, information science, and more. You’ll gain broadly applicable foundational skills as well as develop specialized competencies tailored to specific career paths. Data scientist currently ranks as the #3 top job in America by both Glassdoor and Quanthub, and MS-DS graduates will be prepared to take advantage of the high demand for skilled data talent to land a new job or advance your career. With performance-based admissions, there is no application—simply demonstrate you can do the work. No transcripts, tests, minimum GPAs, or application fees are needed to enroll in the program. With pay-as-you-go tuition, you can craft the learning journey that’s right for your goals. You can build specific skills through independent courses, or complete a series of stackable courses to gain admission into the full degree program. Complete a series of for-credit courses in a “Pathway Specialization” maintaining a grade point average of 3.0 (B) or better to be admitted into the degree program. Combine the credits earned from the Pathway Specialization with additional for-credit courses totalling 30 credit hours.
                        </Card.Text>
                    </Tab>
                    <Tab eventKey="Review" title="Review">
                        <Card.Title>Review</Card.Title>
                        <ReactStars
                            count={5}
                            onChange={this.ratingChanged}
                            size={50}
                            activeColor="#ffd700"
                        />
                    </Tab>
                    <Tab eventKey="FAQ" title="FAQ">
                        <Card.Title>Frequently Asked Questions</Card.Title>
                        <FAQ></FAQ>
                        <FAQ></FAQ>
                        <FAQ></FAQ>
                        <FAQ></FAQ>
                        <FAQ></FAQ>

                    </Tab>
                    </Tabs>
                </Card.Body>
                </Card>
            </Row>

        </>
    )
  }
}   