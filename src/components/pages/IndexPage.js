import React, { Component } from "react";
import LocationsContainer from "../containers/LocationsContainer";
import UsersContainer from "../containers/UsersContainer";

export default class IndexPage extends Component {
  render() {
    return (
      <div className="index-page">
        <br></br>
        <LocationsContainer locations={this.props.locations} />
        <UsersContainer users={this.props.users} />
      </div>
    );
  }
}
