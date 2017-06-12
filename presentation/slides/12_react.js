import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  fb: require("../../assets/fb.png"),
};

preloader(images);

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px" bgImage={images.fb}>
    <Heading size={1} textColor="heading" caps fit>What is ReactJS and why is so cool?</Heading>
    <br />
    <Text textSize={32}>It is a <strong>library</strong> (like knockout) and not a full framework.</Text><br />
    <Text textSize={32}>
      <strong>Only-rendering</strong> library for user interface (no MVC, MVVM, ...).<br />
      Each component is a <strong>reusable JavaScript (EC6) class</strong>.
    </Text><br />
    <Text textSize={32}>Very <strong>light and efficient</strong> virtual DOM management.</Text><br />
    <Text textSize={32} bgColor="primary" textColor="white" padding="2vh">
      Facebook says that ReactJS is cool.<br />
      And we know that everything published on facebook is true!
    </Text>
  </Slide>
);
