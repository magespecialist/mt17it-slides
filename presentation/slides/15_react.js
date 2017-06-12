import React from "react";

import {
  Heading,
  CodePane,
  Slide
} from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="background">
    <Heading size={1} textColor="heading" caps fit>Putting pieces together</Heading>
    <br />
    <CodePane lang="jsx" source={ require('raw-loader!../code/react_03.example') } />
  </Slide>
);
