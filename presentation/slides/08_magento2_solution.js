import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>The Magento2 solution (2)</Heading>
    <br />
    <Text textSize={36}>API REST very <strong>easy to use and to extend</strong>.</Text><br />
    <Text textSize={36}><strong>KnockoutJS</strong> as main frontend solution.</Text><br />
    <Text textSize={36}>Today we have modern frameworks and libraries<br />e.g.: <strong>ReactJS</strong> or <strong>AngularJS4</strong>.</Text><br />
    <Text textSize={36} bgColor="primary" textColor="white" padding="2vh">
      Is KnockoutJS the "Magento 2 version" of the PrototypeJS problem for Magento 1?
    </Text>
  </Slide>
);
