import React from "react";
import SearchResultsContainer from "./SearchResultsContainer";

export default class SearchPage extends React.Component {
  state = {
    searchTerm: "",
  };

  updateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  filterEvents = (eventsToFilter) => {
    return eventsToFilter.filter((x) =>
      x.name.toLowerCase().includes(this.state.searchTerm)
    );
  };

  eventsToRender = () => {
    return this.filterEvents(this.props.events);
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
          onChange={this.updateSearchTerm}
        ></input>
        <br></br>
        <SearchResultsContainer events={this.eventsToRender()} />
      </>
    );
  }
}
