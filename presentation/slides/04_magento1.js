import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background">
    <Heading size={1} textColor="heading" caps fit>Magento 1 frontend model</Heading>
    <br /><br />
    <Text>Magento 1 page was returned as a <strong>single HTML document</strong>.</Text><br />
    <Text>Dynamic parts were rendered <strong>server side</strong>.</Text><br />
    <Text>A lot of problems with <strong>Full Page Cache</strong>.</Text><br />
    <Text>UI reusability was: blocks reusability.</Text>
    <br />
  </Slide>
);
