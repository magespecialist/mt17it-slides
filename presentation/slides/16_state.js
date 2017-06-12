import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["spin"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS fundamentals: The state</Heading>
    <br />
    <Text textSize={36}>A ReactJS application works like a<br /><strong>deterministic logic network</strong> (or <strong>pure network</strong>)</Text><br />
    <Text textSize={36}>One input determines <strong>always the same output</strong>.</Text><br />
    <Text textSize={40} bgColor="primary" textColor="white" padding="2vh">Your view changes as the application state changes.</Text><br />
  </Slide>
);
