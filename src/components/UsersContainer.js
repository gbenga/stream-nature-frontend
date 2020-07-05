import React, { Component } from "react";
import UserCard from "./UserCard";
import API from "../API.js";

class UsersContainer extends Component {
  constructor() {
    super();
    this.state = { usersArray: [] };
  }

  componentDidMount() {
    API.fetchUsers().then((jsonData) => {
      this.setState({ usersArray: jsonData });
    });
  }

  renderUserCard = () => {
    return this.state.usersArray.map((user, index) => (
      <UserCard key={index} user={user} />
    ));
  };

  render() {
    return (
      <div className="users-container">
        <h4> This is the UsersContainer </h4>
        {this.renderUserCard()}
      </div>
    );
  }
}

export default UsersContainer;
