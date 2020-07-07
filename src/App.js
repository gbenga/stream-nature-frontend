import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import SearchPage from "./components/pages/SearchPage";
import IndexPage from "./components/pages/IndexPage";
import LocationShowPage from "./components/pages/LocationShowPage";
import UserShowPage from "./components/pages/UserShowPage";
import UserShowPageBroken from "./components/pages/UserShowPageBroken";
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    events: [],
    locations: [],
    users: [],
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
  }
  render() {
    return (
      <>
        <Router>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/index">Index</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>

          <hr></hr>
          <Switch>
            <Route exact path="/index">
              <IndexPage
                locations={this.state.locations}
                users={this.state.users}
              />
            </Route>
            <Route exact path="/search">
              <SearchPage events={this.state.events} />
            </Route>
            <Route
              exact
              path="locations/:locationId"
              render={(routerProps) => <LocationShowPage {...routerProps} />}
            ></Route>
            {/* Pending location show page */}
            {/* <Route
                exact
                path="/locations/:locationId"
                render={(routerProps) => <LocationShowPage {...routerProps} />}
              /> */}
            <Route
              exact
              path="/users/:userId"
              render={(routerProps) => <UserShowPageBroken {...routerProps} />}
              // swap this in <UserShowBroken {...routerProps} />
            />
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
