import React, { Component } from "react";
import API from "../../API";

export default class SignUpPage extends Component {
  state = {
    newUser: {},
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
      <div className="sign-up-page">
        this is the sign up page, add a form here
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
      </div>
    );
  }
}
