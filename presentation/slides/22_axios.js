import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS + Magento API: What do we need?</Heading>
    <br />
    <Text fontSize={28} bgColor="primary" textColor="white" padding="2vh">AXIOS and Promise middleware.</Text><br />
    <Text fontSize={28}>AXIOS is a <strong>simple Ajax library</strong> converting an ajax request to a <strong>promise</strong>.</Text><br />
    <Text fontSize={28}>Promise is a ReactJS <strong>middleware</strong> converting a promise into <strong>actions</strong>.</Text>
  </Slide>
);
