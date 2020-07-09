import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

// class UserCard extends Component {
//   render() {
//     return (
//       <div className="user-card">
//         <img
//           className="user-img"
//           src={this.props.user.avatar}
//           alt={`avatar for ${this.props.user.name}`}
//         />
//         <p> @{this.props.user.username} </p>
//         <Link to={`/users/${this.props.user.id}`}>Go to my show page</Link>
//       </div>
//     );
//   }
// }

// export default UserCard;

const CardExampleCardProps = (props) => (
  <Card
    image={props.user.avatar}
    header={props.user.name}
    meta={`@${props.user.username}`}
    description={props.user.bio}
    extra={
      <a>
        <Icon name="user" />
        <Link to={`/users/${props.user.id}`}>Discover More</Link>
      </a>
    }
  />
);

export default CardExampleCardProps;
