import React, { Component } from "react";
import UserCard from "../cards/UserCard";

class UsersContainer extends Component {
  renderUserCards = () => {
    return this.props.users.map((user, index) => (
      <UserCard key={index} user={user} />
    ));
  };

  render() {
    return (
      <div className="users-container">
        <h4> This is the UsersContainer </h4>
        {this.renderUserCards()}
      </div>
    );
  }
}

export default UsersContainer;
