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

  componentDidMount() {
    API.fetchUser(this.props.match.params.userId).then((userObj) =>
      this.setState({ user: userObj })
    );
  }

  renderEventCards(events) {
    return events.map((event, idx) => <EventCard event={event} key={idx} />);
  }

  increaseFollowers = (user) => {
    user = this.state.user;
    user.followers = user.followers + 1;
    console.log(user);
    return user;
    //alternative solution will choose tomorrow
    // this.setState({
    //   user: { ...this.state.user, followers: this.state.user.followers + 1 },
    // });
  };
  handleClickButton = () => {
    API.patchToUser(this.increaseFollowers(this.state.user));
    // returns a 404 not sure why
  };

  render() {
    return (
      <div className="user-show-page">
        <h5> {this.state.user.username}</h5>
        <p> @{this.state.user.username} </p>
        <img className="user-img" src={this.state.user.avatar} />
        <p> {this.state.user.followers} Followers</p>
        <button onClick={this.handleClickButton}>Follow</button>
        <p>
          {this.state.user.name} has {this.state.user.events.length} events live
          right now. Explore below:
        </p>
        {this.renderEventCards(this.state.user.events)}
      </div>
    );
  }
}
