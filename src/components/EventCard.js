import React, { Component } from "react";

export default class EventCard extends React.Component {
  render() {
    return <div id="event-card">This is a card{this.props.event.name}</div>;
  }
}
