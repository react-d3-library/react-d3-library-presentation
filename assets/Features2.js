import React, { Component } from "react";
import Heading from "../src/components/heading";
import Fill from "../src/components/fill";
import List from "../src/components/list";
import ListItem from "../src/components/list-item";
import Appear from "../src/components/appear";
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
      paddinTop: 10,
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

    const divStyles2 = {
      marginTop: -350,
      marginLeft: -383,
      width: 1800,
      height: 100
    }


    return (
      <div>
        <Heading size={1} textColor="white">
          Features:
        </Heading>
                    <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
      </div>
    );
  }
}
