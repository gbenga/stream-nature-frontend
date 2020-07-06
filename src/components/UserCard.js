import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <img className="user-img" src={this.props.user.avatar} />
        <p> @{this.props.user.username} </p>
        {/* <button>Edit User</button> */}
      </div>
    );
  }
}

export default UserCard;
