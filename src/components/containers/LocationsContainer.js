import React, { Component } from "react";
import LocationCard from "../cards/LocationCard";
import { Grid, Divider, Header, Icon } from "semantic-ui-react";

export default class LocationsContainer extends Component {
  renderLocationCards(props) {
    return props.locations.map((location, idx) => (
      <Grid.Column key={idx}>
        <LocationCard location={location} />
      </Grid.Column>
    ));
  }

  render() {
    return (
      <div className="locations-container">
        <Divider horizontal>
          <Header as="h2">
            <Icon name="map pin" />
            Location
          </Header>
        </Divider>
        <Grid container columns={3}>
          {this.renderLocationCards(this.props)}
        </Grid>
      </div>
    );
  }
}
