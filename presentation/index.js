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

import Features from "../assets/Features";
import Features2 from "../assets/Features2";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  falseComponent: require("../assets/falseComponent.png"),
  noise: require("../assets/reactd3problem.jpg"),
  chart: require("../assets/chart.png"),
  rerouteD3: require("../assets/rerouteD3.gif"),
  badCode1: require("../assets/badCode1.png"),
  badCode2: require("../assets/badCode2.png"),
  badCode3: require("../assets/badCode3.png"),
  badCode4: require("../assets/badCode4.png"),
  badCode5: require("../assets/badCode5.png"),
  ourD3: require("../assets/ourD3.png"),
  ourReact: require("../assets/ourReact.png"),
  d31: require("../assets/d31.png"),
  d32: require("../assets/d32.png"),
  d33: require("../assets/d33.png"),
  intro: require("../assets/introImg.png"),
  logo: require("../assets/logo.png"),
  cLogos: require("../assets/company_logos.jpg"),
  support: require("../assets/Supports.jpg")
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

          <Slide transition={["slide"]} bgColor="#222">
            <div style={{position: 'absolute', top: '-350px'}}>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React D3 Library
            </Heading>
             <Image
                src={images.logo.replace("/", "")} style={
                {
                  margin: "40px 0"
                }
                } height="450px" width="400px"/>
            <Heading size={1} fit caps>
              A codesmith Presentation
            </Heading>
            <Text bold caps textColor="tertiary">in React</Text>
            <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>by andrew burke, danny lee, and dave loyst!</Text>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="rgb(34, 34, 34)">
            <Image src="https://s3.amazonaws.com/media-p.slid.es/uploads/473947/images/2571254/How-to-integrate-React-D3-The-right-way-adeveloperdiary.com-4.jpg" margin="0px auto 40px" height="293px"/>
          </Slide>


          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading style={{
              position: 'absolute',
              top: -450,
              left: -300
            }} size={1} textColor="rgb(34, 34, 34)">
              React:
            </Heading>
            <Image style={
              {
                position: "absolute",
                top: -300,
                left: -300
              }
            }
            src={images.cLogos.replace("/", "")} margin="0px auto 40px" height="750px"/>
            <Heading style={{
              position: 'absolute',
              top: -450,
              left: 450
            }} size={1} textColor="rgb(34, 34, 34)">
              D3:
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage="primary">
            <Heading size={1} caps fit textColor="white">
              Under the Hood Diagram
            </Heading>
              <br /> <br />
              <div style={{float: 'left', marginLeft: '-200px'}}>
                D3 works by grabbing elements from the DOM
                <br />
                Then binds data to the elements
                <br />
                <Image
                  src='http://4.bp.blogspot.com/-bP2TWBLIj74/Usx_So4o80I/AAAAAAAADJo/7jb8erBdYGo/s1600/d3.png'
                  style={
                    {
                      width: '400px',
                      height: '400px',
                      position: 'relative'
                    }
                  }
                />
              </div>
              <br /> <br />
              <div style={{marginLeft: '400px', marginTop: '-80px'}}>
                React works by abstracting a DOM representation
                <br />
                Only updates changes
                <Image
                  src='http://image.slidesharecdn.com/reactjs-flux-160117101746/95/react-and-flux-life-cycle-with-jsx-react-router-and-jest-unit-testing-4-638.jpg?cb=1453658434'
                  style={
                    {
                      width: '400px',
                      height: '400px',
                      position: 'relative'
                    }
                  }
                />
              </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <div style={{marginTop: -50}}>
              <Heading size={1} caps fit textColor="tertiary">
                Example of the problem
              </Heading>
            </div>
            <BadTree />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Image
                src={images.d31.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -200,
                    top: -500
                  }
                } height="700px" width="500px"/>
              <Image
                src={images.d32.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -175,
                    top: -25
                  }
                } height="650px" width="600px"/>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -400,
                  left: 425
                }
              } fid='1'>
                <Image
                  src={images.badCode1.replace("/", "")} height="400px" width="800px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -275,
                  left: 475
                }
              } fid='2'>
                <Image
                  src={images.badCode2.replace("/", "")} height="300px" width="450px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -200,
                  left: 500
                }
              } fid='3'>
                <Image
                  src={images.badCode3.replace("/", "")} height="620px" width="640px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -150,
                  left: 525
                }
              } fid='4'>
                <Image
                  src={images.badCode4.replace("/", "")} height="200px" width="700px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -50,
                  left: 550
                }
              } fid='5'>
                <Image
                  src={images.badCode5.replace("/", "")} height="250px" width="375px"/>
              </Appear>
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

          <Slide transition={["slide"]} bgImage="primary">
              <Image
                src={images.d31.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -200,
                    top: -500
                  }
                } height="700px" width="500px"/>
              <Image
                src={images.d32.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -175,
                    top: -25
                  }
                } height="650px" width="600px"/>
            <Appear style={
              {
                border: '1px solid white',
                position: 'absolute',
                left: 500,
                top: -400
              }
            }fid='1'>
              <Image
                src={images.ourD3.replace("/", "")} height="500px" width="600px"/>
            </Appear>
            <Appear style={
              {
                border: '1px solid white',
                position: 'absolute',
                left: 500,
                top: 110
              }
            } fid='2'>
              <Image
                src={images.ourReact.replace("/", "")} height="350px" width="500px"/>
            </Appear>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="secondary" textColor="primary">
            <Features />
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Image style={
              {
                position: "absolute",
                top: -450,
                left: -320
              }
            }
            src={images.support.replace("/", "")} margin="0px auto 40px" height="1000px"/>
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







//Other Problems
// <Slide transition={["slide"]} bgColor="primary">
//   <OtherProblems/>
//   <Image style={
//     {
//       position: "absolute",
//       top: -300,
//       left: -300
//     }
//   }
//   src={images.chart.replace("/", "")} margin="0px auto 40px" height="750px"/>
//   <Image style={
//     {
//       position: "absolute",
//       top: -300,
//       left: 650

//     }
//   }
//   src={images.falseComponent.replace("/", "")} margin="0px auto 40px" height="620px" width="640px"/>
// </Slide>
