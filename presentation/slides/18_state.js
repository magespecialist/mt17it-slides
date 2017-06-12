import React from "react";

import {
  Heading,
  CodePane,
  Table,
  TableBody,
  TableItem,
  TableRow,
  Image,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  state: require("../../assets/react_state.jpg")
};

preloader(images);

export default (
  <Slide transition={["slide"]} bgColor="background" maxWidth="1200px">
    <Heading size={1} textColor="heading" caps fit>ReactJS fundamentals: A state example</Heading>
    <br />
    <Table>
      <TableBody>
        <TableRow>
          <TableItem textAlign="left">
            <CodePane className="small-code" lang="javascript" source={ require('raw-loader!../code/state.example') } />
          </TableItem>
          <TableItem><Image src={images.state} /></TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);
