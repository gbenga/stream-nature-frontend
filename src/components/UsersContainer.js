import React, { Component } from "react";
import UserCard from "./UserCard";
import API from "../API.js";

class UsersContainer extends Component {
  state = {
    usersArray: [],
    newUser: {},
  };

  componentDidMount() {
    API.fetchUsers().then((jsonData) => {
      this.setState({ usersArray: jsonData });
    });
  }

  renderUserCards = () => {
    return this.state.usersArray.map((user, index) => (
      <UserCard key={index} user={user} />
    ));
  };

  handleChangeName = (e) => {
    this.setState({
      newUser: { ...this.state.newUser, ...{ name: e.target.value } },
    });
  };

  handleChangeUsername = (e) => {
    this.setState({
      newUser: { ...this.state.newUser, ...{ username: e.target.value } },
    });
  };

  handleChangeBio = (e) => {
    this.setState({
      newUser: { ...this.state.newUser, ...{ bio: e.target.value } },
    });
  };

  setLikesToZero = (user) => {
    user.likes = 0;
    return user;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.postToUsers(this.setLikesToZero(this.state.newUser));
  };

  render() {
    return (
      <div className="users-container">
        <h4> This is the UsersContainer </h4>
        <form className="new-user-form" onSubmit={this.handleSubmit}>
          <label className="label">First Name:</label>
          <input className="input" onChange={this.handleChangeName}></input>
          <label className="label">username:</label>
          <input className="input" onChange={this.handleChangeUsername}></input>
          <label className="label">bio:</label>
          <input className="input" onChange={this.handleChangeBio}></input>
          <button className="button" type="submit">
            Submit new User
          </button>
        </form>
        {this.renderUserCards()}
      </div>
    );
  }
}

export default UsersContainer;
