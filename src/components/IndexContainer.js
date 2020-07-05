import React, { Component } from "react";
import LocationsContainer from "./LocationsContainer";
import UsersContainer from "./UsersContainer";

export default class IndexContainer extends React.Component {
  render() {
    return (
      <div className="index-container">
        this is the Index Container
        <br></br>
        <button>open the search page</button>
        <LocationsContainer locations={this.props.locations} />
        <UsersContainer />
      </div>
    );
  }
}
