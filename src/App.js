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
    // nasaData: {},
  };

  componentDidMount() {
    API.fetchEvents().then((array) =>
      this.setState({ events: [...this.state.events, ...array] })
    );
    API.fetchLocations().then((array) =>
      this.setState({ locations: [...this.state.locations, ...array] })
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
        <IndexContainer locations={this.state.locations} />
        <SearchPage events={this.state.events} />
      </>
    );
  }
}
