import React, { Component } from "react";

export default class SignInForm extends Component {
  render() {
    return;
    <Form className="sign-in-form" onSubmit={this.handleSubmit}>
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
    </Form>;
  }
}
