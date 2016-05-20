import React from 'react';
import node from './d3BinaryTree';
import rd3 from 'react-d3-library';

var Rd3Component = rd3.Component;

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  createTree: function() {
    var d3Node = node();
    this.setState({d3: d3Node});
  },

  highlight: function(e) {
    e.target.style.background = 'white';
  },

  deHighlight: function(e) {
    e.target.style.background = 'black';
  },

  render: function() {
    const styleMakeTree = {
      background: "black",
      padding: 10,
      marginTop: 390,
      marginRight: 5,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "1.5em",
    };
    return (
      <div>
        <Rd3Component data={this.state.d3}/>
        <button style={styleMakeTree} type='button' onClick={this.createTree} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Make Tree</button>
      </div>
    )
  }
});