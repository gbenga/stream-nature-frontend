import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import Logo from "../info/Logo";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {this.props.username ? (
          <h2> Welcome back {this.props.user.username} - how are you?</h2>
        ) : null}
        <div>
          <Header as="h2">
            Stream Nature
            <div></div>
          </Header>
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
