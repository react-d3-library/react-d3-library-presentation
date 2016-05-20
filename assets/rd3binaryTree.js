import React from 'react';
import binaryTree from './d3BinaryTree';
import mergeSort from './d3MergeSort';
import radialTree from './d3RadialTree';
import rd3 from 'react-d3-library';

var Rd3Component = rd3.Component;

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  createTree: function() {
    var binary = binaryTree();
    this.setState({d3: binary});
  },

  createRadialTree: function() {
    var radial = radialTree();
    this.setState({d3: radial});
  },

  createMergeSort: function() {
    var merge = mergeSort();
    this.setState({d3: merge});
  },

  highlight: function(e) {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
  },

  deHighlight: function(e) {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
  },

  render: function() {
    const styleMakeTree = {
      background: "black",
      padding: 10,
      marginTop: 725,
      marginRight: 5,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "1.5em",
    };
    return (
      <div id="rd3-demo">
        <Rd3Component data={this.state.d3}/>
        <button style={styleMakeTree} type='button' onClick={this.createTree} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Binary Tree</button>
        <button style={styleMakeTree} type='button' onClick={this.createRadialTree} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Radial Tree</button>
        <button style={styleMakeTree} type='button' onClick={this.createMergeSort} onMouseDown={this.highlight} onMouseUp={this.deHighlight}>Merge Sort</button>
      </div>
    )
  }
});
