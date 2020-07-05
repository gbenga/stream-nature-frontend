import React, { Component } from "react";
import LocationCard from "./LocationCard";

export default class LocationsContainer extends React.Component {
  renderLocationCards(props) {
    return props.locations.map((location, idx) => (
      <LocationCard location={location} key={idx} />
    ));
  }
  render() {
    return (
      <div className="locations-container">
        This is the Locations Container
        {this.renderLocationCards(this.props)}
      </div>
    );
  }
}
