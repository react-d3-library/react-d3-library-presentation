import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Rd3BinaryTree from "../assets/rd3binaryTree";

import BadTree from "../assets/badBinaryTree";

import OtherProblems from "../assets/otherProblems";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  falseComponent: require("../assets/falseComponent.png"),
  noise: require("../assets/reactd3problem.jpg"),
  chart: require("../assets/chart.png"),
  rerouteD3: require("../assets/rerouteD3.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#46AAE8"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React D3 Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              where you can use d3 in react
            </Heading>
            <Text bold caps textColor="black">it's super sweet</Text>
            <Heading size={1} fit caps>
              A codesmith Presentation
            </Heading>
            <Text bold caps textColor="tertiary">in React</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>by andrew burke, danny lee, and dave loyst!</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="rgb(34, 34, 34)" notes="You can even put notes on your slide. How awesome is that?">
            <Image src="https://s3.amazonaws.com/media-p.slid.es/uploads/473947/images/2571254/How-to-integrate-React-D3-The-right-way-adeveloperdiary.com-4.jpg" margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage="primary">
            <Heading size={1} caps fit textColor="white">
              The Problem
            </Heading>
            <Image style={
              {
                position: "absolute",
                top: -345,
                left: -365

              }
            }
            src={images.noise.replace("/", "")} height="900px" width="1750px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <OtherProblems/>
            <Image style={
              {
                position: "absolute",
                top: -300,
                left: -300
              }
            }
            src={images.chart.replace("/", "")} margin="0px auto 40px" height="750px"/>
            <Image style={
              {
                position: "absolute",
                top: -300,
                left: 650

              }
            }
            src={images.falseComponent.replace("/", "")} margin="0px auto 40px" height="620px" width="640px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <div style={{marginTop: -50}}>
              <Heading size={1} caps fit textColor="tertiary">
                Example of the problem
              </Heading>
            </div>
            <BadTree />
          </Slide>

          <Slide transition={["slide"]} bgImage="primary">
            <img src="http://i.imgur.com/pSn14P1.gif" style={
              {
                position: "absolute",
                top: -400,
                left: -270

              }
            } width="1600" height="850"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Rd3BinaryTree />
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Features
            </Heading>
            <List>
              <ListItem>React Lifecycle Integration</ListItem>
              <ListItem>D3 Animation and Transitions</ListItem>
              <ListItem>Custom React D3 Templates</ListItem>
              <ListItem>Simple</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Challenges
            </Heading>
            <List>
              <ListItem>Recursive Build</ListItem>
              <ListItem>Integrating D3 into React's Lifecycle</ListItem>
              <ListItem>Altering D3 Source Code</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Codesmith by
            </Heading>
            <Image width="25%" src="http://cdn.shopify.com/s/files/1/0080/8372/products/tattly_bekka_palmer_classic_red_heart_web_design_01_grande.jpg?v=1444763442"/>
            <Heading size={.75} caps fit textColor="black">
              Andrew, Daniel, and Dave
            </Heading>
            <Heading size={.25} textColor="black">
              https://github.com/react-d3-library/react-d3-library
            </Heading>

          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}









