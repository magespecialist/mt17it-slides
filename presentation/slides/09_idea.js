import React from "react";

import {
  Heading,
  Text,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  decoupled: require("../../assets/decoupled.png"),
};

preloader(images);

export default (
  <Slide transition={["spin"]} bgColor="background">
    <Heading size={1} textColor="heading" caps fit>Our (not so original) idea</Heading>
    <br /><br />
    <Text fit>Creating a brand new <strong>fully decoupled</strong> frontend.</Text><br />
    <br />
    <Image src={images.decoupled} /><br /><br />
    <br />
    <Text fit>A <strong>real challenging job</strong> for real men (and women).</Text>
  </Slide>
);
