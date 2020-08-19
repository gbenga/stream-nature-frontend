import React, { Component } from "react";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import { Form, Label } from "semantic-ui-react";
import API from "../../API";
import LoadingPage from "./LoadingPage";

export default class SearchPage extends Component {
  state = {
    events: [],
    searchTerm: "",
    isLoading: true,
  };

  async componentDidMount() {
    await API.fetchEvents()
      .then((array) => this.setState({ events: array }))
      .then(this.setState({ isLoading: false }));
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
    if (this.state.isLoading) return <LoadingPage />;

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
