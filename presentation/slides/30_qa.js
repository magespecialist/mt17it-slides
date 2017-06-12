import React from "react";

import {
  Heading,
  Text,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  keepcalm: require("../../assets/keep_calm.png"),
};

preloader(images);

export default (
  <Slide transition={["spin"]} bgColor="background" maxHeight="80vh" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>Thank you for your attention</Heading>
    <br />
    <Text textSize={42}>KEEP CALM</Text>
    <Image src={images.keepcalm} width="15vw" />
    <Text textSize={42}>AND</Text>
    <Text textSize={42}>I WILL ANSWER YOUR QUESTIONS</Text><br />
    <Text textSize={42} bgColor="primary" textColor="white" padding="2vh">The answer is always: 42</Text><br />
  </Slide>
);
