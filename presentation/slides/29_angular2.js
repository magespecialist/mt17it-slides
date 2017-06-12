import React from "react";

import {
  Heading,
  Text,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  angularjs: require("../../assets/angularjs.png"),
};

preloader(images);

export default (
  <Slide transition={["zoom"]} bgColor="background" maxHeight="80vh" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>The other side of the moon: AngularJS4</Heading>
    <br />
    <Image src={images.angularjs} width="100%" /><br />
    <br />
    <Text textSize={36}>Full <strong>framework</strong>, easy to learn.</Text>
    <Text textSize={36}>Even <strong>more powerful</strong> than ReactJS for some kind of project.</Text><br />
    <Text textSize={36}>No time to see it now: <strong>ping me in private</strong>!</Text><br />
  </Slide>
);
