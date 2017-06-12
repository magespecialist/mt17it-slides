import React from "react";

import {
  Heading,
  Text,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  redux: require("../../assets/redux.png")
};

preloader(images);

export default (
  <Slide transition={["spin"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS fundamentals: REDUX</Heading>
    <br />
    <Image width="100%" src={images.redux} /><br />
    <br />
    <Text textSize={24}>Reducers use <strong>functional composition</strong> VS <strong>callback registration</strong> of FLUX.</Text>
    <Text textSize={24}>Usually <strong>splitted in smaller parts</strong>, each responsible for a piece of application.</Text>
    <Text textSize={24}>They are <strong>pure functions</strong> receiving an action and a state and returning a <strong>new modified state</strong>.</Text>
  </Slide>
);
