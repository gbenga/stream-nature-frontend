import React, { Component } from "react";
import LocationShowPage from "./LocationShowPage";

class LocationShowContainer extends Component {

  renderLocationShowPage = () => {
    return this.props.locations.map((location, index) => (
         <LocationShowPage key={index} location={location} /> ) )
  };

  render() {
    return (
      <div className="user-show-container">
      <h4> This is a Location show container </h4>
      { this.renderLocationShowPage() }
      </div>
    );
  }
}


export default LocationShowContainer;
