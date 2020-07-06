import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import SearchPage from "./components/SearchPage";
import IndexContainer from "./components/IndexContainer";
import UserShowContainer from "./components/UserShowContainer";
import LocationShowContainer from "./components/LocationShowContainer";

export default class App extends Component {
  state = {
    events: [],
    locations: [],
    users: [],
    // nasaData: {},
  };

  componentDidMount() {
    API.fetchEvents().then((array) =>
      this.setState({ events: [...this.state.events, ...array] })
    );
    API.fetchLocations().then((array) =>
      this.setState({ locations: [...this.state.locations, ...array] })
    );
    API.fetchUsers().then((array) =>
    this.setState({ users: [...this.state.users, ...array] })
  );
    // API.fetchNasaData().then((data) => this.setState({ nasaData: data }));
  }
  render() {
    return (
      <>
        {/* <div>
          <h3>{this.state.nasaData.title}</h3>
          <img src={this.state.nasaData.url} />
          <p>{this.state.nasaData.date}</p>
          <h4>{this.state.nasaData.explanation}</h4>
        </div> */}
        <IndexContainer locations={this.state.locations} users={this.state.users} />
        <UserShowContainer users={this.state.users} events={this.state.events}/>
        <LocationShowContainer locations={this.state.locations} />
        <SearchPage events={this.state.events} />
      </>
    );
  }
}
