import React, { Component } from "react";
import UserShowPage from "./UserShowPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserShowContainer from "./UserShowContainer";

class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <img className="user-img" src={this.props.user.avatar} />
        <p> @{this.props.user.username} </p>
        <Link to={`/users/${this.props.user.id}`}>Go to my show page</Link>
      </div>
    );
  }
}

export default UserCard;
