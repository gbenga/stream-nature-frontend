import React from "react";

export default function AboutComponent() {
  return (
    <div>
      <strong>
        This app was built in order make it easier for everyone to enjoy a bit
        of nature, without the barriers that sometimes exist.
      </strong>
      <div>
        {" "}
        Made by
        <strong>
          <a href={"https://github.com/gbenga"}>Gbenga</a>
        </strong>
      </div>
      <a href={"https://github.com/gbenga/stream-nature-frontend"}>GitHub</a>
    </div>
  );
}
