import React from "react";

import {
  Heading,
  CodePane,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS + Magento API: AXIOS example</Heading>
    <br />
    <Text fit>Action example to request Magento products list</Text><br />
    <CodePane lang="jsx" source={ require('raw-loader!../code/axios_action.example') } />
  </Slide>
);
