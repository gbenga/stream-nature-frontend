import React, { Component } from "react";
import LocationsContainer from "../containers/LocationsContainer";
import UsersContainer from "../containers/UsersContainer";

export default class IndexPage extends Component {
  render() {
    return (
      <div className="index-container">
        this is the Index Container
        <br></br>
        <button>open the search page</button>
        <LocationsContainer locations={this.props.locations} />
        <UsersContainer users={this.props.users} />
      </div>
    );
  }
}
