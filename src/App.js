import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import SearchPage from "./components/pages/SearchPage";
import IndexPage from "./components/pages/IndexPage";
import LocationShowPage from "./components/pages/LocationShowPage";
import UserShowPage from "./components/pages/UserShowPage";
import Homepage from "./components/pages/Homepage";
import AuthPage from "./components/pages/AuthPage";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    events: [],
    locations: [],
    users: [],
    username: null,
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

  signIn = (username) => { this.setState({username}) }

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
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/auth/sign-in">Auth-Sign in</Link>
            </li>
            <li>
              <Link to="/auth/sign-up">Auth - Sign up</Link>
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
            <Route exact path="/auth">
              <AuthPage />
            </Route>
            <Route exact path="/auth/sign-in">
              <SignInPage signIn={this.signIn} />
            </Route>
            <Route exact path="/auth/sign-up">
              <SignUpPage />
            </Route>
            <Route
              exact
              path="/locations/:locationId"
              render={(routerProps) => <LocationShowPage {...routerProps} />}
            />
            <Route
              exact
              path="/users/:userId"
              render={(routerProps) => <UserShowPage {...routerProps} />}
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
