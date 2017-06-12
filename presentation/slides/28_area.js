import React from "react";

import {
  Heading,
  CodePane,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px" maxHeight="80vh">
    <Heading size={1} textColor="heading" caps fit>ReactJS + Magento API: Something to fix</Heading>
    <br />
    <Text textSize={48}>Magento2 REST API run in <strong>webapi_rest</strong> area.</Text><br />
    <Text textSize={48}>Some plugins, observers and preferences are <strong>frontend</strong> area only.</Text><br />
    <Text textSize={48}>Product images can be a problem.<br />You can resize with <strong>view.xml only</strong> in <strong>frontend area</strong>.</Text><br />
  </Slide>
);
