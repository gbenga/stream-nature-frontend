import React, { Component } from "react";
import SearchResultsContainer from "../containers/SearchResultsContainer";

export default class SearchPage extends Component {
  state = {
    searchTerm: "",
    filteredEvents: [],
  };

  componentDidMount() {
    this.setState({ filteredEvents: this.props.events });
  }

  updateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  filterEvents = (eventsToFilter) => {
    let ev = eventsToFilter.filter((x) =>
      x.name.toLowerCase().includes(this.state.searchTerm)
    );
    this.setState({ filteredEvents: ev });
  };

  handleChange = (e) => {
    this.updateSearchTerm(e);
    this.filterEvents(this.props.events);
  };

  render() {
    return (
      <>
        This is the Search Page <br></br>
        <label type="label" className="search-bar-label">
          Search for events by name:
        </label>
        <input
          type="text"
          className="search-bar"
          onChange={this.handleChange}
        ></input>
        <br></br>
        <SearchResultsContainer events={this.state.filteredEvents} />
      </>
    );
  }
}
