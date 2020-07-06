import React, { Component } from "react";
import EventCard from "./EventCard";
import API from "../API";

class UserShowPage extends Component {
  //FIND ALL EVENTS ST EVENT.userId === this.props.user.ID
  //ITERATE OVER EACH ONE & RENDER THE EVENT CARD
  //SUM THE THOTAL EVENT BELONGINIG TO A USER
  //   renderEventCard = () => {
  //     return this.props.events.map((event, index) => (
  //      <EventCard key={index} event={event} />
  //     ));
  //   };
  state = {};

  componentDidMount() {
    // fetches to the url of the user that has been clicked
    API.fetchUser(this.props.match.params.userId)
      // sets state based on what is fetched
      .then((userObj) => this.setState({ user: userObj }))
      // logs the user obj from the backend
      .then((userObj) => console.log(userObj))
      // logs the User show page itself
      .then((userObj) => console.log(this));
  }

  render() {
    // debugger;
    return (
      <div className="user-show-page">
        {this.state && this.state.user && (
          <div>
            <h5> This is {this.state.user.username}'s show Page </h5>
            <img className="user-img" src={this.state.user.avatar} />
            <p> @{this.state.user.username} </p>
            <p> {this.state.user.followers} Followers</p>
            <button>Follow</button>
            <p> NUMBER OF POSTS GO HERE </p>
            <p> RENDER ALL POSTS GOES HERE </p>
          </div>
        )}
      </div>
    );
  }
}

export default UserShowPage;
