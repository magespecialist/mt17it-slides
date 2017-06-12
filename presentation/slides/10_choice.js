import React from "react";

import {
  Heading,
  Text,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  hamlet: require("../../assets/hamlet.png"),
};

preloader(images);

export default (
  <Slide transition={["slide"]} bgColor="background" bgImage={images.hamlet}>
    <Heading size={1} textColor="heading" caps fit>The hard choice</Heading>
    <br /><br />
    <Text fit>
      There are more JavaScript frameworks<br />than shortcuts in vi editor.<br />
      <br />
      Which one should we use?
    </Text><br />
    <br />
    <Text fit>
      I'd say: it's either <strong>ReactJS</strong> or <strong>AngularJS4</strong>.<br />
    </Text>
    <Text fit>
      The struggle between Good and Evil, <strong>Facebook</strong> and <strong>Google</strong>!.
    </Text>
  </Slide>
);
