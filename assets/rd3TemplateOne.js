import React, { Component } from "react";
import Heading from "../src/components/heading";
import RD3Component from "./library/d3Components/d3StateContainer";
import node from "./library/d3Demo/scatterPlot";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    this.setState({data: node});
  }

  render() {
    const styles = {
      position: "absolute",
      top: 300,
      left: 500
    }

    const headerStyle = {
      position: "absolute",
      top: -350,
      left: 10,
      fontSize: 150,
      fontWeight: "bold"
    }

    return (
      <div>
        <div style={headerStyle}>
          Templates
        </div>
        <div style={styles}>
          <img src="./template" />
        </div>
      </div>
    );
  }
}
