import React from "react";
import SearchResultsContainer from "./SearchResultsContainer";

export default class SearchPage extends React.Component {
  state = {
    // will keep the search term and the events that are rendered as a result
    searchTerm: "",
  };

  updateSearchTerm = (e) => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
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
        <SearchResultsContainer events={this.props.events} />
      </>
    );
  }
}
