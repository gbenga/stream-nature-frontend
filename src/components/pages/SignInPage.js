import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import SignInForm from "../forms/SignInForm";

export default class SignInPage extends Component {
  render() {
    return (
      <div className="sign-in-page">
        <Card centered>
          <Card.Content extra>
            <Icon name="sign-in" />
          </Card.Content>
          <Card.Content header="Enter Your log-in details" />
          <SignInForm />
        </Card>
      </div>
    );
  }
}
