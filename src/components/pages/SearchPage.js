import React, { Component } from "react";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import { Form, Label } from "semantic-ui-react";

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

  filterEvents = () => {
    return this.props.events.filter((e) =>
      e.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    // this.setState({ filteredEvents: ev });
  };

  handleChange = (e) => {
    this.updateSearchTerm(e);
    // this.filterEvents(this.props.events);
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
              onChange={this.handleChange}
            ></input>
          </Form.Field>
        </Form>
        <br></br>
        <SearchResultsContainer events={this.filterEvents()} />
      </>
    );
  }
}
