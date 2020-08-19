import React, { Component } from "react";
import { Header, Image, Button } from "semantic-ui-react";

export default class ProfilePage extends Component {
  handleClickSignOut = () => {
    this.props.signOut();
    this.props.history.push(this.props.redirect);
  };
  render() {
    return (
      <div>
        <>
          <Button
            labelPosition="right"
            icon="dont"
            content="Sign Out"
            onClick={this.handleClickSignOut}
          />
          <Header as="h3" icon textAlign="center">
            {this.props.user.name}
          </Header>
          <Image
            src={this.props.user.avatar}
            alt={`avatar for ${this.props.user.name}`}
            size="small"
            verticalAlign="top"
            centered
          />
          <Header as="h4" icon textAlign="center">
            <Header.Content>@{this.props.user.username}</Header.Content>
            <Header.Content>
              Followers: {this.props.user.followers}
            </Header.Content>
            <Header.Content>Bio: {this.props.user.bio}</Header.Content>
          </Header>
        </>
      </div>
    );
  }
}
