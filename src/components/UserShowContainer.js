import React, { Component } from "react";
import UserShowPage from "./UserShowPage";
import API from "../API";

class UserShowContainer extends Component {
  renderUserShowPage = (events) => {
    return this.props.users.map((user, index) =>
      this.props.events.map((event, index) =>
        event.userId === user.id ? (
          <UserShowPage key={index} user={user} events={event} />
        ) : null
      )
    );
  };

  render() {
    return (
      <div className="user-show-container">
        <h4> This is a Users' show container </h4>
        {this.renderUserShowPage()}
      </div>
    );
  }
}

export default UserShowContainer;
