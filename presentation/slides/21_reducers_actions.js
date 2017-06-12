import React from "react";

import {
  Heading,
  CodePane,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS fundamentals: Reducers</Heading>
    <br />
    <CodePane lang="jsx" source={ require('raw-loader!../code/reducer.example') } />
  </Slide>
);
