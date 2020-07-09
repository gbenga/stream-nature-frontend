import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AuthPage extends Component {
  render() {
    return (
      <div id="auth-page">
        This is the Auth page
        <Link>Sign in here</Link>
        <br></br>
        <Link> Sign up here</Link>
      </div>
    );
  }
}
