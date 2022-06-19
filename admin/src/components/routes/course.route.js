import axios from 'axios'
import React, { Component } from 'react'
import '../../assets/css/home.css'
import { CourseData } from '../functions/courses.data'
export default class Course extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning Admin | Courses';
  }
  render() {
    return (
        <>
            <CourseData />
        </>
    )
  }
}   