import React, { Component } from "react";
import EventCard from "./EventCard";

class UserShowPage extends Component {

    //FIND ALL EVENTS ST EVENT.userId === this.props.user.ID
    //ITERATE OVER EACH ONE & RENDER THE EVENT CARD
    //SUM THE THOTAL EVENT BELONGINIG TO A USER
//   renderEventCard = () => {
//     return this.props.events.map((event, index) => (
//      <EventCard key={index} event={event} />
//     ));    
//   };


  render() {
//    console.log(EventCard)
    return (
      <div className="user-show-page">
      <h5> This is {this.props.user.username}'s show Page </h5>
        <img className="user-img" src={this.props.user.avatar} />
        <p> @{this.props.user.username} </p>
        <p> {this.props.user.followers} Followers</p>
        <button>Follow</button>

         <p> NUMBER OF POSTS GO HERE </p>
        <p> RENDER ALL POSTS GOES HERE </p>
      </div>
    );
  }
}

export default UserShowPage;
