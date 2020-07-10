import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import { Grid, Divider, Header, Icon } from "semantic-ui-react";

export default class SearchResultsContainer extends Component {
  renderEventCards(props) {
    return props.events.map((event, idx) => (
      <Grid.Column>
        <EventCard event={event} key={idx} />
      </Grid.Column>
    ));
  }

  render() {
    return (
      <div className="search-results-container">
        <Divider horizontal>
          <Header as="h2">
            <Icon name="search" />
            Search Results
          </Header>
        </Divider>
        <Grid container columns={3}>
          {this.renderEventCards(this.props)}
        </Grid>
      </div>
    );
  }
}
