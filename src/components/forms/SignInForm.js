import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import API from "../../API";

export default class SignInForm extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        <Message>Username: guest, Password: guest</Message>
        <Form.Field required>
          <Form.Input
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
            label="Username"
          />
          <Form.Input
            name="password"
            onChange={this.handleInputChange}
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
