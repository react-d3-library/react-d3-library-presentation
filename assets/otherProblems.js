import React, { Component } from "react";
import Heading from "../src/components/heading";
import Fill from "../src/components/fill";
import Layout from "../src/components/layout";

export default class Interactive extends Component {
  render() {
    const headerStyles = {
      position: 'absolute',
      top: -450,
      left: -300
    }
    return (
      <div>
        <Heading style={headerStyles} size={1} textColor="white">
          Other Solutions:
        </Heading>
      </div>
    );
  }
}
