import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  sheldon: require("../../assets/sheldon.png")
};

preloader(images);

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} fit textColor="heading" caps>What is the problem?</Heading>
    <br />
    <Text>Frontend technologies are running too fast.</Text><br />
    <Text>
      AngularJS and Fast&amp;Furious movies will<br />
      soon have the same <strong>version number</strong>.
    </Text><br />

    <Text fit>
      Magento 2 was started <strong>some years ago</strong>.<br />
      Does it use the <strong>best modern frontend technologies available</strong>?
    </Text>
  </Slide>
);
