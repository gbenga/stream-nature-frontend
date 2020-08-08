import React from "react";
import API from "../../API";
import { Form, Button } from "semantic-ui-react";

export default class SignUpForm extends React.Component {
  state = {
    name: "",
    avatar: "",
    username: "",
    password: "",
    bio: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.postToUsers(this.setDefaultUserData(this.state)).then((newUser) =>
      console.log(newUser)
    );
  };

  setDefaultUserData = (user) => {
    user.followers = 0;
    console.log(user);
    return user;
  };

  render() {
    return (
      <Form className="new-user-form" onSubmit={this.handleSubmit}>
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
            placeholder="Profile picture"
            label="Profile picture"
          />
          <Form.Input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
            label="Username"
          />
          <Form.Input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
            label="Password"
          />
          <Form.Input
            name="bio"
            value={this.state.bio}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Bio"
            label="Bio"
          />
          <Button
            content="Sign-up"
            value="Sign-up"
            fluid
            inverted
            color="blue"
          />
        </Form.Field>
      </Form>
    );
  }
}
