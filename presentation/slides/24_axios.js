import React from "react";

import {
  Heading,
  CodePane,
  Text,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px" maxHeight="85vh">
    <Heading size={1} textColor="heading" caps fit>ReactJS + Magento API: AXIOS example</Heading>
    <br />
    <Text fit>Reducer example to update state with products list</Text><br />
    <CodePane className="small-code" lang="jsx" source={ require('raw-loader!../code/axios_reducer.example') } />
  </Slide>
);
