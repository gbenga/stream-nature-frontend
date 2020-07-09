import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import API from "../../API";

export default class UserShowPage extends Component {
  state = {
    name: "",
    username: "",
    password_digest: "",
    bio: "",
    followers: 0,
    avatar: "",
    username: "",
    events: [],
  };

  componentDidMount() {
    API.fetchUser(this.props.match.params.userId).then((userObj) =>
      this.setState(userObj)
    );
  }

  renderEventCards(events) {
    return events.map((event, idx) => <EventCard event={event} key={idx} />);
  }

  handleClickButton = () => {
    API.patchToUser(this.state.id).then((followerInfo) => {
      this.setState({
        followers: followerInfo.updatedFollowers,
      });
    });
  };

  render() {
    return (
      <div className="user-show-page">
        <h5> {this.state.username}</h5>
        <p> @{this.state.username} </p>
        <img className="user-img" src={this.state.avatar} />
        <p> {this.state.followers} Followers</p>
        <button onClick={this.handleClickButton}>Follow</button>
        <p>
          {this.state.name} has {this.state.events.length} events live right
          now. Explore below:
        </p>
        {this.renderEventCards(this.state.events)}
      </div>
    );
  }
}
