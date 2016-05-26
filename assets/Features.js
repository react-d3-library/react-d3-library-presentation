import React, { Component } from "react";
import Heading from "../src/components/heading";
import Fill from "../src/components/fill";
import Layout from "../src/components/layout";
import StackedBar from "./convertStackedBarChart";
import TemplateLineChart from "./convertLineChart";

export default class Interactive extends Component {
  render() {
    const headerStyles = {
      position: 'absolute',
      top: -450,
      left: -300
    }

    const styleMakeTree = {
      background: "white",
      padding: 10,
      marginLeft: 50,
      display: 'inline',
      float: 'left',
      textTransform: "uppercase",
      border: "none",
      color: "black",
      outline: "none",
      fontWeight: "bold",
      fontSize: "1.5em",
      position: "relative",
      listStyleType:"none"
    };

    const divStyles = {
      marginTop: -350,
      marginLeft: -383,
      width: 1800,
      height: 100
    }

    return (
      <div>
        <Heading style={headerStyles} size={1} textColor="white">
          Features:
        </Heading>
        <div style={divStyles}>
          <li style={styleMakeTree} >React Lifecycle</li>
          <li style={styleMakeTree} >Transitions</li>
          <li style={styleMakeTree} >Animations</li>
          <li style={styleMakeTree} >Templates</li>
          <li style={styleMakeTree} >Flexibility</li>
        </div>
        <StackedBar />
        <TemplateLineChart />
      </div>
    );
  }
}
