import React, { Component } from "react";
import UserCard from "../cards/UserCard";
import { Grid, Divider, Header, Icon } from "semantic-ui-react";

class UsersContainer extends Component {
  renderUserCards = () => {
    return this.props.users.map((user, index) => (
      <Grid.Column>
        <UserCard key={index} user={user} />
      </Grid.Column>
    ));
  };

  render() {
    return (
      <div className="users-container">
        <Divider horizontal>
          <Header as="h2">
            <Icon name="user" />
            Users
          </Header>
        </Divider>
        <Grid container columns={3}>
          {this.renderUserCards()}
        </Grid>
      </div>
    );
  }
}

export default UsersContainer;
