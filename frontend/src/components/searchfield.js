import React, { Component } from 'react'
import { Form, FormControl, Button } from "react-bootstrap";
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
        <Form className='d-flex'>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleSearchInput} value={this.state.searchtext}/>
            <Button onClick={this.handleSearchSubmit} variant="outline-info">Search</Button>
        </Form>
      )
    }
  }