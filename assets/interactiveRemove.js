import React, { Component } from "react";
import Heading from "../src/components/heading";
const d3 = require("d3");

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var svg = d3.selectAll(".svg-node")
    svg = svg.remove()
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em",
    };

    return (
      <div>
        <div>
          <Heading size={5} textColor="white">
            Remove D3 Elements
          </Heading>
          <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
        </div>
      </div>
    );
  }
}
