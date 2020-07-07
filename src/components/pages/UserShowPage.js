import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import API from "../../API";

export default class UserShowPage extends Component {
  state = {
    user: {
      followers: 0,
      avatar: "",
      username: "",
    },
  };

  componentDidMount() {
    API.fetchUser(this.props.match.params.userId).then((userObj) =>
      this.setState({ user: userObj })
    );
  }

  render() {
    return (
      <div className="user-show-page">
        <h5> This is {this.state.user.username}'s show Page </h5>
        <img className="user-img" src={this.state.user.avatar} />
        <p> @{this.state.user.username} </p>
        <p> {this.state.user.followers} Followers</p>
        <button>Follow</button>
        <p> NUMBER OF POSTS GO HERE </p>
        <p> RENDER ALL POSTS GOES HERE </p>
      </div>
    );
  }
}
