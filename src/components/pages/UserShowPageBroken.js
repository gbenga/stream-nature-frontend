import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import API from "../../API";

class UserShowPageBroken extends Component {
  state = {
    user: {
      followers: 0,
      avatar: "",
      username: "",
    },
  };

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
        <div>
          {/* Current problem is that none of the below renders because this.state is not updated by the fetch*/}
          <h5> This is {this.state.user.username}'s show Page </h5>
          <img className="user-img" src={this.state.user.avatar} />
          <p> @{this.state.user.username} </p>
          <p> {this.state.user.followers} Followers</p>
          <button>Follow</button>
          <p> NUMBER OF POSTS GO HERE </p>
          <p> RENDER ALL POSTS GOES HERE </p>
        </div>
      </div>
    );
  }
}

export default UserShowPageBroken;
