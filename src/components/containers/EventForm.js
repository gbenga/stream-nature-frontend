import React, {Component} from "react";
import { Form, Button } from "semantic-ui-react";
import API from "../../API";

export default class EventForm extends Component {
  state = {
    name: "",
    avatar: "",
    time: "",
    user_id: "",
    location_id: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // API.postToEvents(this.state).then((newEvent) => {});
  };

  render() {
    return (
      <Form className="new-event-form" onSubmit={this.handleSubmit}>
        <Form.Field required>
          <Form.Input
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
            label="Name"
          />
          <Form.Input
            name="avatar"
            value={this.state.avatar}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Event picture"
            label="Event picture"
          />
          <Form.Input
            name="time"
            value={this.state.time}
            onChange={this.handleInputChange}
            type="text"
            placeholder="time"
            label="time"
          />
          {/* <Form.Input
            name="user_id"
            value={this.state.user_id}
            onChange={this.handleInputChange}
            type="user_id"
            placeholder="user_id"
            label="user_id"
          />
          <Form.Input
            name="location_id"
            value={this.state.location_id}
            onChange={this.handleInputChange}
            type="text"
            placeholder="location_id"
            label="location_id"
          /> */}
          <Button
            content="Create-event"
            value="Create-event"
            fluid
            inverted
            color="blue"
          />
        </Form.Field>
      </Form>
    );
  }
}
