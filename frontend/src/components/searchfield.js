import React, { Component } from 'react'
export default class Search extends Component {
    state = {
        searchText: ""
      };
      handleSearchInput = event => {
        this.setState({
          searchText: event.target.value
        });
      };
      
      handleSearchSubmit = () => {
        if (this.state.searchText) {
          this.props.history.push({
            pathname: "/results",
            state: {
              searchText: this.state.searchText
            }
          });
        } else {
          alert("Please enter some search text!");
        }
      };
    render() {
      return (
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchInput}/>
          <button className="btn btn-outline-light" type="submit" onClick={this.handleSearchSubmit}>Search</button>
        </form>
      )
    }
  }