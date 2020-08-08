import React from "react";
import { Image } from "semantic-ui-react";

export default function Logo() {
  return (
    <div>
      <Image
        size="small"
        centered
        src={"../../stream-nature-logo.png"}
        alt={"Stream Nature logo"}
      />
    </div>
  );
}
