import React, { Component } from "react";
import API from "../../API";
import { Card, Icon, Form, Button } from "semantic-ui-react";

export default class SignUpPage extends Component {
  state = {
    newUser: {},
  };

  signUpForm = () => {
    return (
      <Form className="new-user-form" onSubmit={this.handleSubmit}>
        <Form.Field required>
          <Form.Input
            onChange={this.handleChangeName}
            type="text"
            placeholder="Name"
            label="Name"
          />
          <Form.Input
            onChange={this.handleChangeAvatar}
            type="text"
            placeholder="Profile picture"
            label="Profile picture"
          />
          <Form.Input
            onChange={this.handleChangeUsername}
            type="text"
            placeholder="Username"
            label="Username"
          />
          <Form.Input
            onChange={this.handleChangePassword}
            type="password"
            placeholder="Password"
            label="Password"
          />
          <Form.Input
            onChange={this.handleChangeBio}
            type="text"
            placeholder="Bio"
            label="Bio"
          />
          <Button content="Sign-up" value="Sign-up" />
        </Form.Field>
      </Form>
    );
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

  handleChangeAvatar = (e) => {
    this.setState({
      newUser: { ...this.state.newUser, ...{ avatarUrl: e.target.value } },
    });
  };

  handleChangePassword = (e) => {
    this.setState({
      newUser: { ...this.state.newUser, ...{ password: e.target.value } },
    });
  };

  handleChangeBio = (e) => {
    this.setState({
      newUser: { ...this.state.newUser, ...{ bio: e.target.value } },
    });
  };

  setDefaultUserData = (user) => {
    user.followers = 0;
    // user.bio = "";
    console.log(user);
    return user;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.postToUsers(this.setDefaultUserData(this.state.newUser));
  };

  render() {
    return (
      <div className="sign-up-page">
        <Card>
          <Card.Content extra>
            <Icon name="edit" />
          </Card.Content>
          <Card.Content header="Create an Account" />
          <div> {this.signUpForm()} </div>
        </Card>
      </div>
    );
  }
}
