import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import API from "../../API";
import { Header, Icon, Image } from "semantic-ui-react";

export default class LocationShowPage extends Component {
  state = {
    location: {
      id: 0,
      city: "",
      country: "",
      longitude: 0,
      latitude: 0,
      avatar: "",
      bio: "",
      events: [],
    },
  };
  renderEventCards(events) {
    return events.map((event, idx) => <EventCard event={event} key={idx} />);
  }

  componentDidMount() {
    API.fetchLocation(this.props.match.params.locationId).then((locationObj) =>
      this.setState({ location: locationObj })
    );
  }

  render() {
    return (
      <div className="Location-show-page">
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>
            {this.state.location.city}, {this.state.location.country}
          </Header.Content>
        </Header>
        <div>Image to be uploaded</div>
        {/* <Image
          centered
          size="large"
          src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
        /> */}
        <Header as="h2" icon textAlign="center">
          {this.state.location.bio}
        </Header>
        <Header as="h3" icon textAlign="center">
          Lat: {this.state.location.latitude}, Lon:{" "}
          {this.state.location.latitude}
        </Header>
        <Header as="h3" dividing>
          There are currently {this.state.location.events.length} events for:{" "}
          {this.state.location.city}:
        </Header>
        {this.renderEventCards(this.state.location.events)}
      </div>
    );
  }
}
