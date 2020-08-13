import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

const CardExampleCardProps = (props) => (
  <Card
    image={props.location.avatar}
    header={props.location.city}
    meta={props.location.country}
    description={props.location.bio}
    extra={
      <>
        <Icon name="map pin" />
        <Link to={`/locations/${props.location.id}`}>Discover More</Link>
      </>
    }
  />
);

export default CardExampleCardProps;
