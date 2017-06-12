import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["spin"]} bgColor="background" maxWidth="1200px" maxHeight="80vh">
    <Heading size={1} textColor="heading" caps fit>ReactJS + Magento API: A cache isue</Heading>
    <br />
    <Text textSize={42}>A standard Magento2 frontend can rely on <strong>Varnish</strong>.</Text><br />
    <Text textSize={42}>Magento <strong>REST API</strong> do not use a cache system to store their results.</Text><br />
    <Text textSize={42} bgColor="primary" textColor="white" padding="2vh">You may have huge performances problem.</Text>
  </Slide>
);
