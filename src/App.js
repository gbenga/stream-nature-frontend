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
import { Menu } from "semantic-ui-react";

class App extends Component {
  state = {
    events: [],
    locations: [],
    users: [],
    user: null,
    username: null,
    signedIn: false,
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
    //If a user is logged in, meaning we have a JWT token for that user
    //Ask the backend to tell us who the user is

    if (localStorage.token) {
      // debugger
      // API.validate(localStorage.token)
      // .then(json => this.signIn(json.username, json.token))
      // .catch((error) => alert("Validating JWT token failed"));
      // const configObject = { headers: { Authorization: localStorage.token } };
      // return fetch("http://localhost:3000/api/v1/validate", configObject)
      //   .then((response) => response.json())
      //   .then((json) => this.signIn(json.username, json.token))
      //   .catch((error) => alert("Validating JWT token failed"));
      API.validate().then(this.signIn);
    }
  }

  //Invoked in signInPage.js line 44
  signIn = (userObj, token) => {
    this.setState({ user: userObj });
    if (token) localStorage.token = token;
  };

  signOut = () => {
    this.setState({ user: null });
    localStorage.removeItem("token");
    // this.props.history.push('/auth/sign-in')
  };

  render() {
    return (
      <>
        <ul>
          {this.state.user ? (
            <Menu>
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
                <Link to="/auth/sign-in" onClick={this.signOut}>
                  Sign Out
                </Link>
              </Menu.Item>
            </Menu>
          ) : (
            <Menu>
              <Menu.Item>
                <Link to="/auth/sign-up">Sign Up</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/auth/sign-in">Sign In</Link>
              </Menu.Item>
            </Menu>
          )}
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
          {/* may change lines 96 -102 */}
          {/* <Route exact path="/auth">
              <AuthPage signOut={this.signOut} />
            </Route> */}
          <Route
            exact
            path="/auth/sign-in"
            render={(routerProps) => (
              <SignInPage {...routerProps} signIn={this.signIn} />
            )}
          />
          {/* may change lines 96 -102
            <Route exact path="/auth">
              <AuthPage checkLoginStatus={this.state.signedIn} signOut={this.signOut} />
            </Route> */}
          {/* <Route exact path="/auth/sign-in">
              <SignInPage signIn={this.signIn} />
            </Route>  */}
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
            {/* <SignInPage signIn={this.signIn} /> */}
            <Homepage user={this.state.username} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
