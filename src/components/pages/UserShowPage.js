import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import API from "../../API";

export default class UserShowPage extends Component {
  state = {
    user: {
      name: "",
      username: "",
      password_digest: "",
      bio: "",
      followers: 0,
      avatar: "",
      username: "",
      events: [],
    },
  };

  renderEventCards(events) {
    return events.map((event, idx) => <EventCard event={event} key={idx} />);
  }

  componentDidMount() {
    API.fetchUser(this.props.match.params.userId).then((userObj) =>
      this.setState({ user: userObj })
    );
  }

  render() {
    return (
      <div className="user-show-page">
        <h5> {this.state.user.username}</h5>
        <p> @{this.state.user.username} </p>
        <img className="user-img" src={this.state.user.avatar} />
        <p> {this.state.user.followers} Followers</p>
        <button>Follow</button>
        <p>
          {this.state.user.name} has {this.state.user.events.length} events live
          right now. Explore below:
        </p>
        {this.renderEventCards(this.state.user.events)}
      </div>
    );
  }
}
