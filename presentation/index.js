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

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  template: require("../assets/template.png"),
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

          <Slide transition={["zoom"]} bgColor="primary">
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
            <Text textSize="1.5em" margin="20px 0px 0px" bold>by andrew burke, daniel lee, and dave loyst!</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="rgb(34, 34, 34)" notes="You can even put notes on your slide. How awesome is that?">
            <Image src="https://s3.amazonaws.com/media-p.slid.es/uploads/473947/images/2571254/How-to-integrate-React-D3-The-right-way-adeveloperdiary.com-4.jpg" margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgImage="primary">
            <Heading size={1} caps fit textColor="white">
              The Problem
            </Heading>
            <Appear fid="1">
              <Heading size={.75} caps fit textColor="black">
                D3 interacts the actual DOM
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={.75} caps fit textColor="black">
                React creates a virtual DOM
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              D3 will attach itself to the actual DOM
            </Heading>
            <Interactive/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="black">
              Which ruins React's Life Cycle
            </Heading>
            <InteractiveRemove/>
          </Slide>

          <Slide transition={["slide"]} bgImage="primary">
            <Heading size={1} caps fit textColor="white">
              The Solution
            </Heading>
            <Appear fid="1">
              <Heading size={.75} caps fit textColor="black">
                Reroute D3 to React's Virtual DOM
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={.75} caps fit textColor="black">
                Maintain D3's core features
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Rd3Interactive/>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Benefits
            </Heading>
            <List>
              <Appear><ListItem>Simple to use yet highly flexible</ListItem></Appear>
              <Appear><ListItem>Visualizations are part of React Lifecycle</ListItem></Appear>
              <Appear><ListItem>Support for entire spectrum of users</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              MVP Features
            </Heading>
            <List>
              <Appear><ListItem>Reworks core D3 Methods</ListItem></Appear>
              <Appear><ListItem>Convert D3 static visualizations</ListItem></Appear>
              <Appear><ListItem>Create simple charts in one line of code</ListItem></Appear>
              <Appear><ListItem>Maintain React's lifecycle and D3 syntax</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Coming soon
            </Heading>
            <List>
              <Appear><ListItem>Full D3 functionality such as transitions, animations, canvas tags</ListItem></Appear>
              <Appear><ListItem>Support for Redux/Flux and Immutable.js</ListItem></Appear>
              <Appear><ListItem>Expanded template library</ListItem></Appear>
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