import React from "react";
import EventCard from "./EventCard";

export default class EventResultsContainer extends React.Component {
  state = {
    // ATTRIBUTE : VALUE
  };

  renderEventCards(props) {
    return props.events.map((event, idx) => (
      <EventCard event={event} key={idx} />
    ));
  }

  render() {
    return (
      <div id="search-results-container">
        {this.renderEventCards(this.props)}
      </div>
    );
  }
}
