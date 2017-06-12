import React from "react";

import {
  Heading,
  Text,
  Image,
  Slide
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  c64: require("../../assets/c64.png")
};

preloader(images);

export default (
  <Slide transition={["slide"]} bgColor="background">
    <Heading size={1} textColor="heading" fit caps>Before going ahead: a bit of history</Heading>
    <br />
    <br />
    <Image src={images.c64} /><br />
    <br />
    <Text fit>Let's understand how and why we did got here...</Text><br />
  </Slide>
);
