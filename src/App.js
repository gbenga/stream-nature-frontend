import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import SearchPage from "./components/SearchPage";
import IndexContainer from "./components/IndexContainer";

export default class App extends Component {
  state = {
    events: [],
    locations: [],
  };

  componentDidMount() {
    API.fetchEvents().then((array) =>
      this.setState({ events: [...this.state.events, ...array] })
    );
    API.fetchLocations().then((array) =>
      this.setState({ locations: [...this.state.locations, ...array] })
    );
  }
  render() {
    return (
      <>
        <IndexContainer locations={this.state.locations} />
        <SearchPage events={this.state.events} />
      </>
    );
  }
}
