import React from "react";
import { MDBCol } from "mdbreact";
import searchStyle from "../assets/css/search.element.css"

const SearchPage = () => {
  return (
    <MDBCol md="6">
      <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" placeholder="What do you want to learn?" aria-label="Search" />
      </div>
    </MDBCol>
  );
}

export default SearchPage;