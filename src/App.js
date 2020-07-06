import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import SearchPage from "./components/SearchPage";
import IndexContainer from "./components/IndexContainer";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/index">Index</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/index">
            <IndexContainer locations={this.state.locations} />
          </Route>
          <Route path="/search">
            <SearchPage events={this.state.events} />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }
}
