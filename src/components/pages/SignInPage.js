import React, { Component } from "react";
import { Card, Icon, Form, Button } from "semantic-ui-react";

export default class SignInPage extends Component {
  state = {
    username: "",
    password: "",
  };

  signInForm = () => {
    return (
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
      </Form>
    );
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendSignInDataToRails();
  };

  //----------- (POST) Send SignIn Data from state To Rails -----------//
  sendSignInDataToRails = () => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state), //We send the state as the body of the configObj
    };

    return fetch("http://localhost:3000/api/v1/sign-in", configObj)
      .then((resp) => resp.json())
      .then((jso) => {
        if (jso.error) {
          // handleError
        } else {
          this.props.signIn(jso.user, jso.token);
          this.props.history.push(`/users/${jso.user.id}`);
        }
      })
      .catch((error) => console.log(error.message));
  };

  render() {
    return (
      <div className="sign-in-page">
        <Card centered>
          <Card.Content extra>
            <Icon name="sign-in" />
          </Card.Content>
          <Card.Content header="Enter Your log-in details" />
          <div> {this.signInForm()} </div>
        </Card>
      </div>
    );
  }
}
