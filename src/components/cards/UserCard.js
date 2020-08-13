import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

const CardExampleCardProps = (props) => (
  <Card
    image={props.user.avatar}
    header={props.user.name}
    meta={`@${props.user.username}`}
    description={props.user.bio}
    extra={
      <>
        <Icon name="user" />
        <Link to={`/users/${props.user.id}`}>Discover More</Link>
      </>
    }
  />
);

export default CardExampleCardProps;
