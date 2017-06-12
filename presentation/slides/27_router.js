import React from "react";

import {
  Heading,
  CodePane,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS + Magento API: The routing problem</Heading>
    <br />
    <Text textSize={36}>You will need <strong>react-router-redux</strong> to create a <strong>React MVC</strong> kind of.</Text><br />
    <Text textSize={36}>And you will need to <strong>add a webservice</strong> to interface your frontend router with your <strong>Magento url_rewrite engine</strong>.</Text><br />
    <Text textSize={36} bgColor="primary" textColor="white" padding="2vh">This will be quite challenging!</Text><br />
  </Slide>
);
