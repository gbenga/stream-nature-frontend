import React, { Component } from "react";
import API from "../API";

export default class EventShowContainer extends Component {
  // componentDidMount() {
  //     API.fetchUser()
  // }
  render() {
    // debugger;

    return <div>here I am{this.props.match.path}</div>;
  }
}
