import React, { Component } from "react";
import EventCard from "../cards/EventCard";
import API from "../../API";
import {
  Header,
  Icon,
  Button,
  Image,
  Reveal,
  Divider,
  Grid,
  Segment,
} from "semantic-ui-react";

export default class UserShowPage extends Component {
  state = {
    name: "",
    username: "",
    password_digest: "",
    bio: "",
    followers: 0,
    avatar: "",
    events: [],
  };

  componentDidMount() {
    API.fetchUser(this.props.match.params.userId).then((userObj) =>
      this.setState(userObj)
    );
  }

  renderEventCards(events) {
    return events.map((event, idx) => <EventCard event={event} key={idx} />);
  }

  handleClickButton = () => {
    API.patchToUser(this.state.id).then((followerInfo) => {
      this.setState({
        followers: followerInfo.updatedFollowers,
      });
    });
  };

  render() {
    return (
      <div className="user-show-page">
        <Header as="h2" icon textAlign="center">
          <Header.Content>{this.state.name}</Header.Content>
        </Header>
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Reveal animated="small fade">
                <Reveal.Content visible>
                  <Image
                    src={this.state.avatar}
                    alt={`avatar for ${this.state.name}`}
                    size="small"
                    verticalAlign="top"
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Header as="h4" icon textAlign="center">
                    <Header.Content>{this.state.bio}</Header.Content>
                  </Header>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" icon textAlign="center">
                <Header.Content>@{this.state.username}</Header.Content>
              </Header>
              <Header as="h4" icon textAlign="center">
                <Header.Content>
                  {this.state.followers} Followers
                </Header.Content>
              </Header>
              <Button onClick={this.handleClickButton} animated="vertical">
                <Button.Content visible>Follow</Button.Content>
                <Button.Content hidden>
                  <Icon name="handshake" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid>

          <Divider vertical>And</Divider>
        </Segment>

        <Header as="h4" icon textAlign="center">
          <Header.Content>
            {this.state.name} has {this.state.events.length} events live right
            now. Explore below:
          </Header.Content>
        </Header>
        <p></p>
        {this.renderEventCards(this.state.events)}
      </div>
    );
  }
}
