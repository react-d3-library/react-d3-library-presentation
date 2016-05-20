import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

import InteractiveRemove from "../assets/interactiveRemove";

import Rd3Interactive from "../assets/rd3Interactive";

import OtherProblems from "../assets/otherProblems";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  falseComponent: require("../assets/falseComponent.png"),
  noise: require("../assets/reactd3problem.jpg"),
  chart: require("../assets/chart.png"),
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
            <Heading size={1} fit caps>
              A codesmith Presentation
            </Heading>
            <Heading size={1} fit caps textColor="black">
              where you can use d3 in react
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">it's super sweet</Text>
            </Link>
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
            <Heading size={1} caps fit textColor="tertiary">
              Our Problem Demo
            </Heading>
            <Interactive/>
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

          <Slide transition={["slide"]} bgImage="primary">
            <Heading size={1} caps fit textColor="white">
              The Solution
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="white">
              Solution Demo
            </Heading>
            <Rd3Interactive/>
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
              <ListItem>Features</ListItem>
              <ListItem>Features</ListItem>
              <ListItem>Features</ListItem>
              <ListItem>Features</ListItem>
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
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}









