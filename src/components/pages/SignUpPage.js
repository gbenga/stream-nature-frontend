import React, { Component } from "react";
import SignUpForm from "../containers/SignUpForm";
import { Card, Icon } from "semantic-ui-react";

export default class SignUpPage extends Component {
  // handleChangeName = (e) => {
  //   this.setState({
  //     newUser: { ...this.state.newUser, ...{ name: e.target.value } },
  //   });
  // };

  // handleChangeUsername = (e) => {
  //   this.setState({
  //     newUser: { ...this.state.newUser, ...{ username: e.target.value } },
  //   });
  // };

  // handleChangeAvatar = (e) => {
  //   this.setState({
  //     newUser: { ...this.state.newUser, ...{ avatarUrl: e.target.value } },
  //   });
  // };

  // handleChangePassword = (e) => {
  //   this.setState({
  //     newUser: { ...this.state.newUser, ...{ password: e.target.value } },
  //   });
  // };

  // handleChangeBio = (e) => {
  //   this.setState({
  //     newUser: { ...this.state.newUser, ...{ bio: e.target.value } },
  //   });
  // };

  render() {
    return (
      <div className="sign-up-page">
        <Card centered>
          <Card.Content extra>
            <Icon name="edit" />
          </Card.Content>
          <Card.Content header="Create an Account" />
          <SignUpForm />
        </Card>
      </div>
    );
  }
}
