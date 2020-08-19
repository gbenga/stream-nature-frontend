import React from "react";
import { Dimmer, Loader, Segment, Header } from "semantic-ui-react";

export default function LoadingPage() {
  return (
    <Header as="h2" icon textAlign="center">
      <Segment>
        <Dimmer active inverted>
          <Loader size="large">Just a moment please...</Loader>
        </Dimmer>
      </Segment>
    </Header>
  );
}
