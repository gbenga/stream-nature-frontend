import React, { Component } from "react";

export default class LocationCard extends React.Component {
  render() {
    const location = this.props.location;
    return (
      <div className="location-card">
        This is a Location Card
        <h5>City: {location.city}</h5>
        <p>Country: {location.country}</p>
        <p>
          Coordinates: {location.longitude}
          {location.latitude}
        </p>
      </div>
    );
  }
}
