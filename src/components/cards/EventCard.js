import React, { Component } from "react";
import API from "../../API";
import { Card, Icon, Button } from "semantic-ui-react";

export default class EventCard extends Component {
  state = {
    id: 0,
    name: "",
    time: 0,
    likes: 0,
    location: {},
    user: {},
  };

  componentDidMount() {
    API.fetchEvent(this.props.event.id).then((eventObj) =>
      this.setState(eventObj)
    );
  }

  handleClickButton = () => {
    API.patchToEvent(this.state.id).then((likeInfo) => {
      this.setState({
        likes: likeInfo.updatedLikes,
      });
    });
  };

  render() {
    return (
      <Card
        // image={this.state.avatar}
        header={this.state.name}
        meta={this.state.time}
        meta={`${this.state.likes} likes`}
        description={`Live from: ${this.state.location.city},${this.state.location.country}`}
        extra={
          <>
            <a>
              <Icon name="user" />
              Hosted by: {this.state.user.name}
            </a>
            <Button onClick={this.handleClickButton} animated="vertical">
              <Button.Content hidden>Like</Button.Content>
              <Button.Content visible>
                <Icon name="like" />
              </Button.Content>
            </Button>
          </>
        }
      />
    );
  }
}
