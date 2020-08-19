import React, { Component } from "react";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import { Form, Label } from "semantic-ui-react";
import API from "../../API";

export default class SearchPage extends Component {
  state = {
    events: [],
    searchTerm: "",
  };

  componentDidMount() {
    API.fetchEvents().then((array) => this.setState({ events: array }));
  }

  updateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  filterEvents = () => {
    return this.state.events.filter((e) =>
      e.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <Form>
          <Form.Field inline>
            <Label basic color="blue" pointing="right">
              Search for Events by Name:
            </Label>
            <input
              type="text"
              className="search-bar"
              onChange={this.updateSearchTerm}
              placeholder="Search events by name..."
            ></input>
          </Form.Field>
        </Form>
        <br></br>
        <SearchResultsContainer filteredEvents={this.filterEvents()} />
      </>
    );
  }
}
