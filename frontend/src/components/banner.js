import React, { Component } from 'react'
import style from '../assets/css/home.css'
import image1 from '../assets/images/Banner/person-holds-a-book-over-a-stack-and-turns-the-page.webp'
import image2 from '../assets/images/Banner/row-of-young-adults-at-work.jpg'
import image3 from '../assets/images/Banner/wrtiting-tools.jpg'

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
  } from 'mdb-react-ui-kit';
import { Carousel } from 'react-bootstrap'
export default class Banner extends Component {
  render() {
    return (
        <div className='container-fluid'>
            <MDBCarousel showControls interval={5000}>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                <MDBCarouselElement src={image1} style={{height:600}} alt='...'/>
                  <Carousel.Caption>
                    <h1 className='fw-bold'>Our Vision</h1>
                    <h3 className='fw-bold'>We envision a world where anyone, anywhere has the power to transform their life through learning.</h3>
                  </Carousel.Caption>
                </MDBCarouselItem>
                <MDBCarouselItem>
                <MDBCarouselElement src={image2} style={{height:600}} alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem>
                <MDBCarouselElement src={image3} style={{height:600}} alt='...' />
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
        </div>
    )
  }
}   