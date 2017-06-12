import React from "react";

import {
  Text,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  react: require("../../assets/react.png"),
  fonzie: require("../../assets/fonzie.png"),
};

preloader(images);

export default (
  <Slide transition={["zoom"]} bgColor="background" maxWidth="1200px" bgImage={images.fonzie}>
    <Image src={images.react} /><br />
    <br />
    <br />
    <Text fit>The very-WEB 3.0 and cool-frontend-people-approved solution!</Text>
  </Slide>
);
