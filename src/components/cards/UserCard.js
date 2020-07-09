import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <img
          className="user-img"
          src={this.props.user.avatar}
          alt={`avatar for ${this.props.user.name}`}
        />
        <p> @{this.props.user.username} </p>
        <Link to={`/users/${this.props.user.id}`}>Go to my show page</Link>
      </div>
    );
  }
}

export default UserCard;
