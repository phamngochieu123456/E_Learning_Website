import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import error from '../../assets/images/404 Page.gif'
export default class Errorpages extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning | Error';
  }
  render() {
    return (
        <div className="container-fluid" >
            <div className="text-center">
                <div className="error mx-auto bg-transparent">
                    <img src={error} style={{borderRadius:'100%'}}></img>
                </div>
                <Link className="btn-outline-dark" to={'/'} style={{textDecoration: 'none'}}>
                    Back to Dashboard
                </Link>
            </div>

    </div>
    )
  }
}