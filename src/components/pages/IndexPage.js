import React, { Component } from "react";
import LocationsContainer from "../containers/LocationsContainer";
import UsersContainer from "../containers/UsersContainer";
import API from "../../API";

export default class IndexPage extends Component {
  state = {
    locations: [],
    users: [],
  };

  componentDidMount() {
    API.fetchLocations().then((array) => this.setState({ locations: array }));
    API.fetchUsers().then((array) => this.setState({ users: array }));
  }
  render() {
    return (
      <div className="index-page">
        <br></br>
        <LocationsContainer locations={this.state.locations} />
        <UsersContainer users={this.state.users} />
      </div>
    );
  }
}
