import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import success from '../../assets/images/check.png'
export default class PaymentSuccess extends Component {
  render() {
    return (
        <div className="container-fluid" >
            <div className="text-center">
                <div className="error mx-auto bg-transparent">
                    <img src={success} style={{borderRadius:'100%', width:"15%"}}></img>
                </div>
                <br></br>
                <h1>Purchase successfully</h1>
                <br></br>
                <Link className="btn-outline-light btn btn-primary" to={'/dashboard'} style={{textDecoration: 'none'}}>
                    Back to Dashboard
                </Link>
            </div>

    </div>
    )
  }
}