import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Logo from "../info/Logo";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {this.props.username ? (
          <h2>Hello, {this.props.username} - how's it going?</h2>
        ) : (
          <div>
            <div>
              {/* <Header as="h2">
                Welcome to <strong>Stream Nature</strong>
                <div>
                  {" "}
                  please
                  <Link to="/auth/sign-in">Sign in</Link>or
                  <Link to="/auth/sign-up">Sign up</Link>
                </div>
              </Header> */}
            </div>
            <Container>-</Container>
            <Container>
              <Logo />
              <a href={"https://github.com/gbenga/stream-nature-frontend"}>
                GitHub
              </a>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
