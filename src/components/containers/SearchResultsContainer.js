import React, { Component } from "react";
import EventCard from "../cards/EventCard";

export default class SearchResultsContainer extends Component {
  renderEventCards(props) {
    return props.events.map((event, idx) => (
      <EventCard event={event} key={idx} />
    ));
  }

  render() {
    return (
      <div className="search-results-container">
        {this.renderEventCards(this.props)}
      </div>
    );
  }
}
