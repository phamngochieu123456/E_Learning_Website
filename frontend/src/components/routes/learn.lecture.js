import React, { Component } from 'react'
import { Card, Row, Tab, Tabs } from 'react-bootstrap'
import '../../assets/css/home.css'
import { GrDocumentPdf } from "react-icons/gr";

export default class LearnLecture extends Component {
    ratingChanged = (newRating) => {
        console.log(newRating);
      };
  render() {
    return (
        <>
            <Row>
                <Card>
                <Card.Body>
                    <Tabs defaultActiveKey="Reading" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Reading" title="Reading">
                        <Card.Title className='d-flex'>Earn a data science degree from the only top-40 US public university with no application.</Card.Title>
                        <Card.Subtitle className='d-flex'>
                        *Academic Ranking of World Universities, 2019
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                        Learn valuable job skills for in-demand data science careers by pursuing a full Master of Science in Data Science degree from the University of Colorado Boulder. This fully online MS in Data Science is an ideal choice for career-focused learners eager to benefit from a comprehensive, multi-disciplinary approach. This program leverages unparalleled faculty expertise across statistics, data science, computer science, natural language processing, information science, and more. You’ll gain broadly applicable foundational skills as well as develop specialized competencies tailored to specific career paths. Data scientist currently ranks as the #3 top job in America by both Glassdoor and Quanthub, and MS-DS graduates will be prepared to take advantage of the high demand for skilled data talent to land a new job or advance your career. With performance-based admissions, there is no application—simply demonstrate you can do the work. No transcripts, tests, minimum GPAs, or application fees are needed to enroll in the program. With pay-as-you-go tuition, you can craft the learning journey that’s right for your goals. You can build specific skills through independent courses, or complete a series of stackable courses to gain admission into the full degree program. Complete a series of for-credit courses in a “Pathway Specialization” maintaining a grade point average of 3.0 (B) or better to be admitted into the degree program. Combine the credits earned from the Pathway Specialization with additional for-credit courses totalling 30 credit hours.
                        </Card.Text>
                    </Tab>
                    <Tab eventKey="Video" title="Video">
                    </Tab>
                    <Tab eventKey="Resourse" title="Resourse">
                        <Card.Title>Frequently Asked Questions</Card.Title>
                        <Card.Text className='d-flex'>
                            <GrDocumentPdf /> <a href=''>Tài liệu</a>
                        </Card.Text>
                        <Card.Text className='d-flex'>
                            <GrDocumentPdf /> <a href=''>Tài liệu</a>
                        </Card.Text>
                        <Card.Text className='d-flex'>
                            <GrDocumentPdf /> <a href=''>Tài liệu</a>
                        </Card.Text>
                    </Tab>
                    </Tabs>
                </Card.Body>
                </Card>
            </Row>

        </>
    )
  }
}   