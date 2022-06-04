import React, { Component } from 'react'
import '../../assets/css/home.css'
import { CardCourseCData } from '../functions/cardcourse.complete.data'
export default class Completed extends Component {
  render() {
    return (
        <div className='container-fluid'>
              <CardCourseCData />
        </div>
    )
  }
}   