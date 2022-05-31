import React, { Component } from 'react'

export default class FAQ extends Component {
  render() {
    return (
      <>
      <button style={{width:'100%'}} className="btn btn-light btn-lg btn-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
      Questions
      </button>
      <div className="collapse" id="collapseExample">
      <div>Answers</div>
      </div>
      </>
    )
  }
}   