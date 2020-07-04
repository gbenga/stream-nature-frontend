import React from "react";
import SearchResultsContainer from "./SearchResultsContainer";

export default class SearchPage extends React.Component {
  state = {
    // will keep the search term and the events that are rendered as a result
  };

  render() {
    return (
      <>
        This is the Search Page <br></br>This is a placeholder for the search
        bar
        <SearchResultsContainer events={this.props.events} />
      </>
    );
  }
}
