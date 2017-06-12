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
  fpc1: require("../../assets/fpc1.png")
};

preloader(images);

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>Magento 1 - Full Page Cache</Heading>
    <br /><br />
    <Table>
      <TableBody>
        <TableRow>
          <TableItem><Image src={images.fpc1} /></TableItem>
          <TableItem textAlign="left">
            <Text textSize={32}>FPC is behind PHP</Text>
            <Text textSize={32}>PHP is always involved</Text>
            <Text textSize={32}>Problem with cache invalidations</Text>
            <Text textSize={32}>Problem with holepunching</Text>
            <Text textSize={32}>Different output versions stored</Text>
          </TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);
