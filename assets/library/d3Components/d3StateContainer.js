import React from 'react';
const d3DataToJSX = require('./../react-d3/d3DataToJSX');
const D3ChildContainer = require('./d3ChildContainer')


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: [], data: []}
  },

  componentWillReceiveProps: function(nextProps) {
      let d3Data = d3DataToJSX(nextProps.data);
      this.setState({d3: d3Data.mappedData, data: d3Data.state})
  },

  render: function() {
    var rd3Styles = {
      position: "relative",
      top: -400,
      left: -500,
      fontSize: 12
    }
    return (
      <div style={rd3Styles} >
        <D3ChildContainer data={this.state} />
      </div>
    )
  }
});


