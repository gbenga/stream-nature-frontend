import React, { Component } from "react";
import "./App.css";
import API from "./API";
import SearchPage from "./components/pages/SearchPage";
import IndexPage from "./components/pages/IndexPage";
import LocationShowPage from "./components/pages/LocationShowPage";
import UserShowPage from "./components/pages/UserShowPage";
import Homepage from "./components/pages/Homepage";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";

class App extends Component {
  state = {
    events: [],
    locations: [],
    users: [],
    user: null,
    signedIn: false,
    isLoading: true,
  };

  async componentDidMount() {
    if (localStorage.token) {
      const jso = await API.validate(localStorage.token);
      this.signIn(jso.user, jso.token);
    }
    this.setState({ isLoading: false });
  }

  signIn = (user, token) => {
    this.setState({ user: user });
    localStorage.token = token;
  };

  signOut = () => {
    this.setState({ user: null });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <>
        <Menu>
          {this.state.user ? (
            <>
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index">Index</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/search">Search</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={`/users/${this.state.user.id}`}>Profile</Link>
              </Menu.Item>
              <Menu.Item>
                <Button onClick={this.signOut}>Sign Out</Button>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item>
                <Link to="/sign-up">Sign Up</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/sign-in">Sign In</Link>
              </Menu.Item>
            </>
          )}
        </Menu>

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
          <Route exact path="/sign-in">
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
            <Homepage user={this.state.user} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
