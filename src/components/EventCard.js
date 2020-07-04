import React, { Component } from "react";

export default class EventCard extends React.Component {
  render() {
    return (
      <div className="event-card">
        This is a card for: {this.props.event.name}
      </div>
    );
  }
}
