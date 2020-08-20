import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import Logo from "../info/Logo";
import About from "../pages/About";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header as="h2">Stream Nature</Header>
          <div>Sign in to get started.</div>
          {this.props.user ? (
            <h2> Welcome back {this.props.user.name} - how are you?</h2>
          ) : null}
          <div>
            <Logo />
            <About />
          </div>
        </Container>
      </div>
    );
  }
}
