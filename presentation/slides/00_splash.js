import React from "react";

import {
  Image,
  Heading,
  Text,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  riccardo: require("../../assets/riccardo.png"),
  background: require("../../assets/magetitansitaly.jpg"),
};

preloader(images);

export default (
  <Slide className="solid-background" transition={["zoom"]} bgColor="background" bgImage={images.background} maxWidth="1200px" maxHeight="80vh">
    <Heading size={6} fit textColor="heading" caps>
      Integrating Magento2 with ReactJS
    </Heading>
    <Image width="65%" src={images.riccardo} />
    <Text textSize={32}>I know, I was younger when this photo was taken... It was Magento 1.7!</Text>
  </Slide>
);
