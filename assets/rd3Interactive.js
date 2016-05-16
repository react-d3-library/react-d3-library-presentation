import React, { Component } from "react";
import Heading from "../src/components/heading";
import RD3Component from "./library/d3Components/d3StateContainer";
import node from "./library/d3Demo/bubbleChart";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var div = document.createElement('div');

    var color = d3.scale.linear()
    .interpolate(d3.interpolateHcl)
    .domain([0, 100])
    .range(["#F66A96", "#3E6E9C"]);

    var svg = d3.select(div).append("svg")
      .attr({
        width: 2000,
        height: 300,
        class: "svg-node"
      })

    var node = svg.selectAll(".node")
      .data([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
    node.enter().append("circle")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate("+ (Math.random() * 1700 ) + "," + (Math.random() * 300)+")"; })
      .attr("r", function(d) { return d; })
      .attr("fill", function(d) { return color(Math.floor(Math.random() * 100)); })

    this.setState({data: div})
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
        <RD3Component className="RD3Component" data={this.state.data} />
          <Heading size={5} textColor="black">
            With React D3 that won't be a problem
          </Heading>
          <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
