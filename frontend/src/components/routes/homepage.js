import React, { Component } from 'react'
import style from '../../assets/css/home.css'
import Banner from '../banner'
export default class Homepage extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning | Home';
  }
  render() {
    return (
        <div className='container-fluid'>
            <Banner />
        </div>
    )
  }
}   