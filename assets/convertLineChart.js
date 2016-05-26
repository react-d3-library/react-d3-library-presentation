import React from 'react';
import node from './lineChart';
import rd3 from 'react-d3-library';

const Rd3Component = rd3.Component;

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  render: function() {
    const templateStyle = {
      position: "absolute",
      left: 670,
      top: -5

    }
    return (
      <div style={templateStyle}>
        <Rd3Component data={this.state.d3} />
      </div>
    )
  }
});
