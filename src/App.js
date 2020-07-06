import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import SearchPage from "./components/SearchPage";
import IndexContainer from "./components/IndexContainer";
import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

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
          <li>
            <Link to="/dummyusers">Dummy Users</Link>
          </li>
        </ul>

        <hr></hr>
        <Switch>
          <Route path="/index">
            <IndexContainer locations={this.state.locations} />
          </Route>
          <Route path="/search">
            <SearchPage events={this.state.events} />
          </Route>
          <Route path="/dummyusers">
            <DummyUsers />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function DummyUsers() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>This is for the dummy users</h2>
      <ul>
        <li>
          <Link to={`${match.url}/dummyusers`}>Dummy User 1</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:dummyUserId`}>
          <DummyUser />
        </Route>
      </Switch>
    </div>
  );
}

function DummyUser() {
  let { dummyUserId } = useParams();
  return <div>I'm your fav {dummyUserId}</div>;
}
