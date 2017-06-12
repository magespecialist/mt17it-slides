import React from "react";

import {
  Heading,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  sheldon: require("../../assets/sheldon.png")
};

preloader(images);

export default (
  <Slide transition={["spin"]} bgColor="background" bgImage={images.sheldon}>
    <Heading size={6} fit textColor="heading" caps>
      A new frontend for Magento 2?<br />
      Are you crazy or what?
    </Heading>
    <Text textColor="text" fit>
      <br />
      "I am not crazy, my mother had me tested."<br />
    </Text>
    <Text textColor="text">
      <span className="cit">-- cit. Dr. Sheldon Cooper</span>
    </Text>
  </Slide>
);
