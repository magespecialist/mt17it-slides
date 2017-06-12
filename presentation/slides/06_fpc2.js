import React from "react";

import {
  Heading,
  Text,
  Table,
  TableBody,
  TableItem,
  TableRow,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  fpc2: require("../../assets/fpc2.png"),
  fry: require("../../assets/fry.png"),
};

preloader(images);

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1300px" bgImage={images.fry}>
    <Heading size={1} textColor="heading" caps fit>Magento 1 - The Varnish Hell</Heading>
    <br />
    <Table>
      <TableBody>
        <TableRow>
          <TableItem><Image src={images.fpc2} /></TableItem>
          <TableItem textAlign="left">
            <Text textSize={32}>ESI blocks configuration</Text>
            <Text textSize={32}>Holepunching problems</Text>
            <Text textSize={32}>Hell of configuration</Text>
            <Text textSize={32}>Too many developers fallen on duty</Text>
            <Text textSize={32}>Developers need a social life (not 100% sure)</Text>
          </TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);
