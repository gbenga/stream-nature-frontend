import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import API from "../../API";

export default class SignInForm extends Component {
  state = {
    username: "",
    password: "",
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.signIn(this.state)
      .then((json) => this.props.signIn(json.user, json.token))
      .then(
        this.setState({
          username: "",
          password: "",
        })
      );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field required>
          <Form.Input
            onChange={this.handleUsernameChange}
            type="text"
            placeholder="Username"
            label="Username"
          />
          <Form.Input
            onChange={this.handlePasswordChange}
            type="password"
            placeholder="Password"
            label="Password"
          />
          <Button content="Sign-in" value="Sign-in" />
        </Form.Field>
      </Form>
    );
  }
}
