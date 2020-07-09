import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        {this.props.username ? (
          <h2>Hello, {this.props.username} - how's it going?</h2>
        ) : (
          <h2>
            Welcome, please
            <Link to="/auth/sign-in">Sign in</Link>or
            <Link to="/auth/sign-up">Sign up</Link>
          </h2>
        )}
      </div>
    );
  }
}
