import React from "react";

import {
  Heading,
  Text,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  flux: require("../../assets/flux.png"),
};

preloader(images);

export default (
  <Slide transition={["zoom"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS fundamentals: The FLUX</Heading>
    <br />
    <Image width="100%" src={images.flux} /><br />
    <br />
    <Text fit>Everything is <strong>unidirectional</strong>. No 2-way bindings (i.e.: observables).</Text>
  </Slide>
);
