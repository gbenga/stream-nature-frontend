import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchPage from "./components/SearchPage";
import API from "./API";

export default class App extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    API.fetchEvents().then((array) =>
      this.setState({ events: [...this.state.events, ...array] })
    );
  }
  render() {
    return (
      <>
        <SearchPage events={this.state.events} />
      </>
    );
  }
}
