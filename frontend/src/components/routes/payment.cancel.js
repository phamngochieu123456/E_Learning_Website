import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import success from '../../assets/images/warning.png'
export default class PaymentCancel extends Component {
  componentDidMount() {
    document.title = 'DUT-Elearning | Payment Cancel';
  }
  render() {
    return (
        <div className="container-fluid" >
            <div className="text-center">
                <div className="error mx-auto bg-transparent">
                    <img src={success} style={{borderRadius:'100%', width:"15%"}}></img>
                </div>
                <h1 style={{fontStyle:'italic'}}>TRANSACTION FAIL!!!</h1>
                <br></br>
                <Link className="btn-outline-light btn btn-primary" to={'/dashboard'} style={{textDecoration: 'none'}}>
                    Back to Dashboard
                </Link>
            </div>

    </div>
    )
  }
}