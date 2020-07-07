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
       <h3> This is the Locations Container </h3>
        {this.renderLocationCards(this.props)}
      </div>
    );
  }
}

