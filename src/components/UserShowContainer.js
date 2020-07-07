import React, { Component } from "react";
import UserShowPage from "./UserShowPage";
import API from "../API";

class UserShowContainer extends Component {
  state = {
    userEvents: [],
  };

  renderUserShowPage = () => {
    return this.props.users.map((user, index) => (
      <UserShowPage key={index} user={user} />
    ));
  };

  // renderUserShowPage = (event) => {
  //   return this.setState({userEvents: [...this.state.userEvents, {event}]}, () => <UserShowPage key={index} user={user} events={this.state.userEvents}/> )
  // };

  // passEventProps = () => {
  //   this.props.events.forEach( event =>
  //  {event.userId === user.id?
  //    this.renderUserShowPage(event) : null}
  //   )
  // }

  render() {
    return (
      <div className="user-show-container">
        <h4> This is a Users' show container </h4>
        {/* { this.passEventProps() } */}
        {this.renderUserShowPage()}
      </div>
    );
  }
}

export default UserShowContainer;
