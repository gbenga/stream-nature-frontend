import React, { Component } from "react";

export default class EventCard extends Component {
  render() {
    const event = this.props.event;
    return (
      <div className="event-card">
        <h5>This is a card for:{event.name}</h5>
        <p>Time:{event.time}</p>
        <button>Like</button>
        <p>
          Hosted by user: {event.userId}, live from: {event.locationId}
        </p>
      </div>
    );
  }
}
