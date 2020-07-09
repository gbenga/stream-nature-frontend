import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class AuthPage extends Component {

  render() {
    return (
      <div id="auth-page">
        This is the Auth page
        {/* {this.props.checkLoginStatus? <button onClick={this.props.signOut}> Sign Out </button> : <Link> Sign in here</Link> } */}
        <br></br>
        <Link> Sign up here</Link>
      </div>
    );
  }
}
