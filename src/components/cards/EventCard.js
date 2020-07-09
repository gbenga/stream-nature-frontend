import React, { Component } from "react";
import API from "../../API";
import { Card, Icon } from "semantic-ui-react";

//   render() {
//     return (
//       <div className="event-card">
//         <h5>This is a card for:{this.state.name}</h5>
//         <p>Time:{this.state.time}</p>
//         <button onClick={this.handleClickButton}>Like</button>
//         <p>{this.state.likes} likes</p>
//         <p>
//           Hosted by user: {this.state.user.name}, live from:{" "}
//           {this.state.location.city}
//         </p>
//       </div>
//     );
//   }
// }
// class CardExampleCardProps extends Component {
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
        image={this.state.avatar}
        header={this.state.name}
        meta={this.state.time}
        description={`Live from: ${this.state.location.city},${this.state.location.country}`}
        extra={
          <a>
            <Icon name="user" />
            Hosted by: {this.state.user.name}
          </a>
        }
      />
    );
  }
}

// export default CardExampleCardProps;
