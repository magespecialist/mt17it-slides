import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["spin"]} bgColor="background" maxWidth="1100px">
    <Heading size={1} textColor="heading" caps fit>The Magento2 solution (1)</Heading>
    <br />
    <Text textSize={36}>Static parts are <strong>PHTML driven</strong>.</Text><br />
    <Text textSize={36}>Dynamic parts are handled via <strong>API REST calls</strong>.</Text><br />
    <Text textSize={36}>UI components are <strong>reusable JS components</strong>.</Text><br />
    <Text textSize={36}>Frontend is <strong>not</strong> fully decoupled.</Text><br />
    <Text textSize={36} bgColor="primary" textColor="white" padding="2vh">
      Real full page cache and good performances.<br />
      Average code complexity.
    </Text>
  </Slide>
);
