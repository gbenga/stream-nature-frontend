import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import Logo from "../info/Logo";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Header as="h2">Stream Nature</Header>
        {this.props.user ? (
          <h2> Welcome back {this.props.user.name} - how are you?</h2>
        ) : null}
        <div>
          <Container>-</Container>
          <Container>
            <Logo />
            <a href={"https://github.com/gbenga/stream-nature-frontend"}>
              GitHub
            </a>
          </Container>
        </div>
      </div>
    );
  }
}
